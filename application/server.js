require("node-jsx").install(
  {
    "extension":  ".jsx",
    "harmony":    true
  }
);

var Express              = require("express");
var Morgan               = require("morgan");
var Webpack              = require("webpack");
var WebpackDevMiddleware = require("webpack-dev-middleware");

var React                = require("react");
var ReactRouter          = require("react-router");

const NAME = "Isomorphic React Test";
var port = process.env.WEB_PORT || 8080;

var server = new Express();

server.use(
  new Morgan("combined")
);

var webpackConfig = require("../webpack.config.js");

server.use(
  new WebpackDevMiddleware(
    new Webpack(
      webpackConfig
    ),
    {
      "lazy":       true,
      "publicPath": webpackConfig.output.publicPath
    }
  )
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
                  "body":   {
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

try {
  server.listen(port);
  console.info("Now serving:\n - " + NAME + " on port " + port + "…\n");

} catch (error) {
  console.error("Couldn't start " + NAME + " on port " + port);
}
