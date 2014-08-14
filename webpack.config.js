var path = require("path");

module.exports = {
  "context":  __dirname,

  "entry":    {
                "jsx":  "./application/client.js"
              },

  "module":   {
                "loaders":  [
                              {
                                "test":   /\.jsx/,
                                "loader": "jsx-loader?harmony"
                              }
                            ]
              },

  "output":   {
                "filename":       "[name].js",
                "chunkFilename":  "chunk_[id].js",
                "path":           path.join(__dirname, "bundles/"),
                "publicPath":     "/bundles/"
              },

};
