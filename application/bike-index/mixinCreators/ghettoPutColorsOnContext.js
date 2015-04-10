var GhettoColorMixin = require("../mixins/GhettoColor");

var ghettoPutColorsOnContext = function (colors) {

  return {
    "childContextTypes":          GhettoColorMixin.contextTypes,

    "getChildContext":            function () {
                                    return {
                                      "ghettoColors":    colors,
                                    }
                                  },

    "getGhettoColors":            function () {
                                    return colors;
                                  },
  }
};

module.exports = ghettoPutColorsOnContext;
