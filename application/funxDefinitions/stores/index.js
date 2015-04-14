var Immutable    = require("immutable");

var utilities = require("ambidex").addons.utilities;

var BikeModel = require("../../models/BikeModel");

var index = {
  "stateful":   {
                  "Bikes":            require("./Bikes"),
                  "MyProfile":        require("./MyProfile"),
                  "StolenBikeIndex":  require("./StolenBikeIndex"),
                },

  "ephemeral":  {
                  "currentBike":    function (Bikes, routerState) {
                                      return routerState.has("bikeID")
                                        ? Bikes.getOrFetch(
                                            {
                                              "bikeID":       routerState.get("bikeID"),
                                              "detailLevel":  BikeModel.DetailLevel.FULL
                                            }
                                          )
                                        : null
                                    },

                  "myBikes":        function (Bikes, myProfile) {
                                      return myProfile.get("bikeIDs").map(
                                        bikeID => Bikes.getOrFetch(
                                                    {
                                                      bikeID
                                                    }
                                                  )
                                      ).filter(utilities.hasValue);
                                    },

                  "stolenBikes":    function (bikes, stolenBikeIndex) {
                                      // bikes is guaranteed to be populated by the StolenBikes API call
                                      return stolenBikeIndex.map(
                                        bikeID => bikes.get(bikeID)
                                      );
                                    },

                  "readyToRender":  function (routerState, currentBike, myBikes, StolenBikeIndex) {
                                      if (routerState.has("bikeID") && !(currentBike && currentBike.detailLevel === BikeModel.DetailLevel.FULL))
                                        return false;

                                      if (!myBikes.every(utilities.hasValue))
                                        return false;

                                      if (routerState.size === 0) {
                                        // If there's no routerState, we must be on the home page
                                        //
                                        // (If Funx is developed further, there should be a better
                                        // test for this)

                                        var stolenBikeIndexValue = StolenBikeIndex.getOrFetch();
                                        if (!stolenBikeIndexValue)
                                          return false;
                                      }

                                      return true;
                                    },
                }
};

module.exports = index;
