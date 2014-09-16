require("node-jsx").install(
  {
    "extension":  ".jsx",
    "harmony":    true
  }
);

// Adds useful methods to Promise prototype, inc. converting node callbacks to promises
require('prfun');

/*  Most of our globals are defined in `webpackSettings`, but since `settings`
 *  depends on `SERVER_IP`, and `webpackSettings` depends on `settings`, we
 *  have to manually declare this here.                                        */
global.SERVER_IP = require("my-local-ip")();

var readFileSync            = require('fs').readFileSync;

var Express                 = require("express");
var ServeStaticMiddleware   = require("serve-static");
var MorganMiddleware        = require("morgan");
var Compression             = require("compression");
var Webpack                 = require("webpack");
var WebpackDevServer        = require("webpack-dev-server");

var React                   = require("react");
var ReactRouter             = require("react-router");

var settings                = require("./settings.js");


var webpackSettingsOptions  = {};

if (settings.ENABLE_HOT_MODULE_REPLACEMENT) {
  webpackSettingsOptions.devServerOrigin = "http://" + settings.HOST + ":" + settings.WEBPACK_PORT;

} else {
  webpackSettingsOptions.minimizeFileSize = true;
}

var webpackSettings = require("./webpack_settings_getter.js")(webpackSettingsOptions);

(function () {
  // These are the globals defined for the browser with Webpack
  var globalDefinitions = webpackSettings.plugins[0].definitions;
  var serverOverrides = {
    "IN_BROWSER":   false
  };

  // We need to declare their server-side counterparts:
  Object.keys(globalDefinitions).forEach(
    function (key, i, keys) {
      global[key] = serverOverrides.hasOwnProperty(key)
        ? serverOverrides[key]

        // Webpack `eval`s strings, so we do too
        : typeof globalDefinitions[key] === "string"
          ? eval(globalDefinitions[key])
          : globalDefinitions[key]
    }
  );
})();

process.title = settings.SHORT_NAME;

var webpack = new Webpack(webpackSettings);
webpack.run = Promise.promisify(webpack.run);

var server = new Express();

// logs HTTP requests to the shell
server.use(
  new MorganMiddleware("combined")
);

// GZIP
server.use(
  new Compression()
);

if (settings.ENABLE_HOT_MODULE_REPLACEMENT) {
  server.all(
    "*",

    function (request, response, next) {
      response.header(
        "Access-Control-Allow-Origin",
        "//" + settings.HOST + ":" + settings.WEBPACK_PORT
      );
      next();
    }
  );
} else {
  var styleHtml;
  var scriptHtml;

  var webpackRan = webpack.run().then(
    function (stats) {
      console.log(stats.toString());

      styleHtml  = readFileSync(webpackSettings.output.path + "styles.js");
      scriptHtml = readFileSync(webpackSettings.output.path + "jsx.js");

      return stats;
    }
  ).catch(
    function (error) {
      console.error("Error packing bundles with Webpack:");
      console.error(error);
    }
  );
}

/*  For ease of deployment, we should serve all our static
 *  assets from one place; however, for source organization,
 *  each module has its own static folder.
 *
 *  Here, we mount them all to `/static/` (effectively
 *  inverting their order in the path).
 */
server.use(
  settings.STATIC_URL + "generic",
  new ServeStaticMiddleware(__dirname + "/generic/static")
);

server.use(
  settings.STATIC_URL + "__your_project_name__",
  new ServeStaticMiddleware(__dirname + "/__your_project_name__/static")
);

// insert your own static modules here

server.get(
  "*",

  function (request, response) {
    // If webpack is running, block til it's ready to return
    Promise.all(
      [
        ReactRouter.renderRoutesToString(
          require("./routes.jsx"),
          request.path
        ),
        webpackRan
      ]
    ).then(
      function (results) {
        var renderedResult = results[0];
        var webpackStats   = results[1];

        var styleProp  = {};
        var scriptProp = {};

        if (settings.ENABLE_HOT_MODULE_REPLACEMENT) {
          styleProp.src  = webpackSettings.output.publicPath + "styles.js";
          scriptProp.src = webpackSettings.output.publicPath + "jsx.js";
        } else {
          // Inline the source if we aren't using Hot Module Replacement to reduce
          // unneccesary requests
          styleProp.__html  = styleHtml;
          scriptProp.__html = scriptHtml;
        }

        response.send(
          [
            "<!DOCTYPE html>",

            // Running ReactRouter against the <html> element is buggy,
            // so we only render <Main> (which mounts to the <body>) with
            // ReactRouter and do the rest as static markup with <Scaffold>
            React.renderComponentToStaticMarkup(
              require("./generic/components/Scaffold.jsx")(
                {
                  "favIconSrc": settings.FAV_ICON_URL,
                  "style":      styleProp,
                  "script":     scriptProp,
                  "body":       {
                                  "__html":   renderedResult.html
                                }
                }
              )
            )
          ].join("\n")
        );
      }
    ).catch(
      function (error) {
        console.log(error);

        response.status = error.httpStatus;
        response.end("ReactRouter errored.");
      }
    );
  }
);


var logAppStart = function (name, port) {
  console.info(" - " + name + " on " + settings.HOST + ":" + port + "…");
};

try {
  server.listen(settings.VM_PORT || settings.PORT);

  console.info("Now serving:");
  logAppStart(settings.NAME, settings.PORT);

} catch (error) {
  console.error("Couldn't start " + settings.NAME + " on port " + settings.PORT + " because");
  console.error(error);
}

if (settings.ENABLE_HOT_MODULE_REPLACEMENT) {
  new WebpackDevServer(
    webpack,
    {
      "hot":        true,
      "publicPath": webpackSettings.output.publicPath
    }
  ).listen(
    settings.WEBPACK_PORT,
    settings.HOST,
    function (error, result) {
      if (error) {
        console.error(error);
        process.exit();

      } else {
        logAppStart("Webpack Dev Server", settings.WEBPACK_PORT);

        console.log("\n");
      }
    }
  );
}
