var Ambidex = require("ambidex");
var Gravel  = require("gravel");
var mach    = require("mach");

var settings = require("./settings." + NODE_ENV + ".js");

module.exports = new Ambidex(
  {
    settings,

    "middlewareInjector":     function (stack) {
                                stack.map(
                                  settings.CUSTOM_SETTINGS.STATIC_URL + "generic",
                                  mach.file(Gravel.STATIC_PATH)
                                );

                                stack.map(
                                  settings.CUSTOM_SETTINGS.STATIC_URL + "bike-index",
                                  mach.file(__dirname + "/static")
                                );
                              }
  }
);
