var Immutable = require("immutable");

var BikeModel = require("../../models/BikeModel");

var Bikes = Object.assign(
  {
    "actionsEmitted":   [
                          "bikesLoaded",
                        ],

    "get":              function ({ bikeID }) {
                          this.getFromAPI(
                            `bikes/${ bikeID }/`

                          ).then(
                            response => {
                              var bike = BikeModel.fromBikeIndex(
                                response.bike,
                                BikeModel.DetailLevel.FULL
                              );

                              this.funx.actions.bikesLoaded(
                                {
                                  "bikes":  Immutable.Map(
                                              {
                                                [bike.id]:  bike
                                              }
                                            )
                                }
                              );
                            }
                          );
                        }
  },

  require("./mixins/getFromAPI.js")
);


module.exports = Bikes;
