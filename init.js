// Runs all app code through node-jsx, so we can use conveniences like fat-arrow lambdas

require("node-jsx").install(
  {
    "extension":  ".js",
    "harmony":    true
  }
);

require("make-node-env-global")();

module.exports = require("./application/server.js");
