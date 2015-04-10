var utilities = require("ambidex").addons.utilities;

module.exports = utilities.recursiveCloneWithDefaults(
  {
    "HOST":                           "bikeindex.local",
    "PORT":                           "8080",

    "ENABLE_HOT_MODULE_REPLACEMENT":  true,
    "WEBPACK_PORT":                   "8081"
  },

  require("./settings.common.js")
);
