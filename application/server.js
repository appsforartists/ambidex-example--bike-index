require("node-jsx").install(
  {
    "extension":  ".jsx",
    "harmony":    true
  }
);

var Express              = require("express");
var Morgan               = require("morgan");
var Webpack              = require("webpack");
var WebpackDevServer     = require("webpack-dev-server");

var React                = require("react");
var ReactRouter          = require("react-router");

const NAME = "Isomorphic React Test";

var host = "localhost";
var port = process.env.WEB_PORT || 8080;
var webpackPort = port + 1;

var webpackConfig = require("../webpack.config.js");
webpackConfig.output.publicPath = "http://" + host + ":" + webpackPort + webpackConfig.output.publicPath;

var server = new Express();

server.use(
  new Morgan("combined")
);

server.all(
  "*",

  function (request, response, next) {
    response.header(
      "Access-Control-Allow-Origin",
      "//" + host + ":" + webpackPort
    );
    next();
  }
);

server.get(
  "*",

  function (request, response) {
    ReactRouter.renderRoutesToString(
      require("./routes.jsx"),
      request.path
    ).then(
      function (result) {
        response.end(
          [
            "<!DOCTYPE html>",
            React.renderComponentToStaticMarkup(
              require("./components/Scaffold.jsx")(
                {
                  "scriptSrc":  webpackConfig.output.publicPath + "jsx.js",
                  "body":       {
                                  "__html":   result.html
                                }
                }
              )
            )
          ].join("\n")
        );
      }
    );
  }
);

var webpackDevServer = new WebpackDevServer(
  new Webpack(
    webpackConfig
  ),
  {
    "hot":       true,
    "publicPath": webpackConfig.output.publicPath
  }
);

try {
  server.listen(port);

  var logAppStart = function (name, port) {
    console.info(" - " + name + " on port " + port + "…");
  };

  console.info("Now serving:");
  logAppStart(NAME, port);

  webpackDevServer.listen(
    webpackPort,
    host,
    function (error, result) {
      if (error) {
        console.error(error);
        process.exit();

      } else {
        logAppStart("Webpack Dev Server", webpackPort);
      }
    }
  );

  console.log(""); // newline

} catch (error) {
  console.error("Couldn't start " + NAME + " on port " + port);
}
