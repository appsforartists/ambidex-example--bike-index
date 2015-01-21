var Ambidex = require("Ambidex");
var mach    = require("mach");

var settings = require("./settings." + NODE_ENV + ".js");

module.exports = new Ambidex(
  {
    settings,

    "middlewareInjector":     function (stack) {
                                stack.map(
                                  settings.CUSTOM_SETTINGS.STATIC_URL + "generic",
                                  mach.file(__dirname + "/generic/static")
                                );

                                stack.map(
                                  settings.CUSTOM_SETTINGS.STATIC_URL + "bike-index",
                                  mach.file(__dirname + "/bike-index/static")
                                );
                              }
  }
);
