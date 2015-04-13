var Immutable    = require("immutable");

var index = {
  "stateful":   {
                },

  "ephemeral":  {
                  "readyToRender":          function (routerState) {
                                              return true;
                                            },
                }
};

module.exports = index;
