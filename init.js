// Runs all app code through node-jsx, so we can use conveniences like fat-arrow lambdas

require("node-jsx").install(
  {
    "extension":  ".js",
    "harmony":    true
  }
);

require("make-node-env-global")();

if (process.argv.length == 2) {
  module.exports = require("./application/init.js");

} else if (process.argv[2] == "tardis") {
  module.exports = require("./application/tardis/init.js");

} else {
  throw new Error(require("./application/settings.common.js").NAME + ' should be started with "npm start" or "npm start tardis".  It does not understand "' + process.argv.join(" ") + '".');
}


