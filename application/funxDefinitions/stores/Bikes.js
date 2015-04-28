var Immutable = require("immutable");

var BikeModel = require("../../models/BikeModel");

var Bikes = {
  "serialize":        function (lastValue) {
                        return lastValue.toJSON();
                      },

  "deserialize":      function (serializedLastValue) {
                        return Immutable.Map(
                          serializedLastValue
                        ).map(
                          serializedBike => BikeModel.fromBikeIndex(
                                              serializedBike,
                                              serializedBike.detailLevel
                                            )
                        );
                      },

  "getInitialValue":  function () {
                        return Immutable.Map();
                      },

  "getOrFetch":       function ({ bikeID, detailLevel }, lastValue) {
                        var result = lastValue.get(bikeID) || null;

                        if (!result || result.detailLevel < detailLevel) {
                          this.funx.apis.bikes.get(
                            {
                              bikeID
                            }
                          );
                        }

                        return result;
                      },

  "actionHandlers":   {
                        "bikesLoaded":  function ({ bikes }, lastValue) {
                                          return lastValue.merge(
                                            bikes.mapEntries(
                                              ([i, bike]) => [bike.id, bike]
                                            )
                                          );
                                        },
                      }
};

module.exports = Bikes;
