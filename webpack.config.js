var Webpack = require("webpack");

var path = require("path");

module.exports = {
  "context":  __dirname,

  "entry":    {
                "jsx":  [
                          "webpack-dev-server/client?http://localhost:8081",
                          "webpack/hot/dev-server",
                          "./application/client.js"
                        ]
              },

  "resolve":  {
                "extensions": [
                  "",
                  ".js",
                  ".jsx"
                ]
              },

  "module":   {
                "loaders":  [
                              {
                                "test":   /\.jsx$/,
                                "loader": "react-hot-loader!jsx-loader?harmony"
                              }
                            ]
              },

  "output":   {
                "filename":       "[name].js",
                "chunkFilename":  "chunk_[id].js",
                "path":           path.join(__dirname, "bundles/"),
                "publicPath":     "/bundles/"
              },

  "plugins":  [
                new Webpack.HotModuleReplacementPlugin()
              ],
};
