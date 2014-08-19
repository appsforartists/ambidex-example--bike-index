var Webpack = require("webpack");
var Lazy    = require("lazy.js");
var path    = require("path");

var config = {
  "context":  __dirname,

  "entry":    {
                "jsx":    [
                            "./application/styles/Main.scss",
                            "./application/client.js"
                          ],

              },

  "resolve":  {
                "extensions": [
                  "",
                  ".js",
                  ".jsx",
                  ".scss"
                ]
              },

  "module":   {
                "loaders":  [
                              {
                                "test":   /\.jsx$/,
                                "loader": "react-hot-loader!jsx-loader?harmony"
                              },
                              {
                                "test":   /\.scss$/,
                                "loader": "style-loader!css-loader!sass-loader"
                              }
                            ]
              },

  "output":   {
                "filename":       "[name].js",
                "chunkFilename":  "chunk_[id].js",
                "path":           path.join(__dirname, "bundles/"),
                "publicPath":     "/bundles/"
              },

  "plugins":  [],
};

/**
 *  webpack.config.js is supposed to export a webpack config dictionary, but we
 *  want to be able to dynamically configure it to support things like Hot
 *  Module Replacement with the Dev Server; therefore, we add our own
 *  "getConfig" method to the exported dictionary that lets us customize it
 *  before using it in our own scripts.
 */

module.exports = Lazy(config).merge(
  {
    "getConfig":      function getConfig (options) {
                        if (options.hasOwnProperty("devServerOrigin")) {
                          config.entry.jsx.push(
                            "webpack-dev-server/client?" + options.devServerOrigin, // e.g. localhost:8081
                            "webpack/hot/dev-server"
                          );

                          config.output.publicPath = options.devServerOrigin + config.output.publicPath;

                          config.plugins.push(
                            new Webpack.HotModuleReplacementPlugin()
                          );
                        }

                        return config;
                      }
  }
).toObject();
