var utilities    = require("ambidex").addons.utilities;

var refluxActionsForRouterState = [
  {
    "actionName":     "getStolenBikes",
    "storeName":      "StolenBikes",
  },

  {
    "actionName":     "getMyBikes",
    "storeName":      "MyBikes",
  },

  {
    "parameterName":  "bikeID",
    "actionName":     "viewBike",
    "storeName":      "CurrentBike",
    "isReady":        utilities.hasContent,
  },
];

module.exports = refluxActionsForRouterState;
