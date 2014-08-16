var Webpack = require("webpack");

var path = require("path");

module.exports = {
  "context":  __dirname,

  "entry":    {
                "jsx":    [
                            // TODO: conditionally enable these in dev mode
                            "webpack-dev-server/client?http://localhost:8081",
                            "webpack/hot/dev-server",

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

  "plugins":  [
                new Webpack.HotModuleReplacementPlugin()
              ],
};
