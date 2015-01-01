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
  },
];

module.exports = refluxActionsForRouterState;
