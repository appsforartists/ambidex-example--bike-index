var React = require("react/addons");

var GhettoColorMixin = {
  "contextTypes":               {
                                  "ghettoColors":        React.PropTypes.object.isRequired,
                                },

  "getGhettoColors":            function () {
                                  return this.context.ghettoColors;
                                },
};

module.exports = GhettoColorMixin;
