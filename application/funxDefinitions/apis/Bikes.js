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

                              // ugly syntax until https://github.com/facebook/jstransform/issues/35 closes
                              var bikes = {};
                              bikes[bike.id] = bike;

                              this.funx.actions.bikesLoaded(
                                {
                                  "bikes":  Immutable.Map(
                                              bikes
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
