var Immutable = require("immutable");

var BikeModel = require("../../models/BikeModel");

var StolenBikes = Object.assign(
  {
    "actionsEmitted":   [
                          "bikesLoaded",
                          "stolenBikeIndexFragmentLoaded",
                        ],

    "get":              function () {
                          this.getFromAPI(
                            `bikes_search/stolen`

                          ).then(
                            response => {
                              var bikes = Immutable.List(
                                response.bikes

                              ).toMap().mapEntries(
                                ([i, bike], _) => [
                                                    String(bike.id),

                                                    BikeModel.fromBikeIndex(
                                                      bike,
                                                      BikeModel.DetailLevel.SUMMARY
                                                    )
                                                  ]
                              );

                              this.funx.actions.bikesLoaded(
                                {
                                  bikes
                                }
                              );

                              this.funx.actions.stolenBikeIndexFragmentLoaded(
                                {
                                  "startingPosition": 0,
                                  "indexFragment":    bikes.keySeq()
                                }
                              );
                            }
                          );
                        }
  },

  require("./mixins/getFromAPI.js")
);


module.exports = StolenBikes;
