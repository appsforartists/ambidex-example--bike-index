var Lazy = require("lazy.js");

var BikeModel = require("../models/BikeModel.js");

var Bikes = {
  "actions":      [
                    "getBike",
                    "updateBikes"
                  ],

  "store":        Object.assign(
                    {
                      "init":               function () {
                                              this.state = {};
                                            },

                      "onGetBike":          function (bikeID) {
                                              if (this.state[bikeID]) {
                                                this.trigger(this.state);

                                                if (!this.settings.CUSTOM_SETTINGS["ACTIONS_UPDATE_CACHED_DATA"]) {
                                                  return;
                                                }
                                              }

                                              this.getBikeFromAPI(bikeID).then(
                                                bike => {
                                                  bike = BikeModel.fromBikeIndex(
                                                    bike,
                                                    BikeModel.DetailLevel.FULL
                                                  );

                                                  this.state[bikeID] = bike;
                                                  this.trigger(this.state);
                                                }

                                              ).catch(
                                                error => console.error(error.stack)
                                              );
                                            },

                      "onUpdateBikes":      function (updatedBikes) {
                                              Lazy(updatedBikes).each(
                                                (updatedBike, bikeID) => {
                                                  if (this.state[bikeID]) {
                                                    if (updatedBike.detailLevel > this.state[bikeID].detailLevel) {
                                                      this.state[bikeID] = Object.assign(
                                                        this.state[bikeID],
                                                        updatedBike
                                                      );
                                                    }
                                                  } else {
                                                    this.state[bikeID] = updatedBike;
                                                  }
                                                }
                                              );

                                              this.trigger(this.state);
                                            },

                      "getBikeFromAPI":     function (bikeID) {
                                              return this.getFromAPI(`bikes/${ bikeID }/`).then(
                                                dict => dict.bike
                                              );
                                            }
                    },

                    require("./mixins/getFromAPI.js")
                  )
};

module.exports = Bikes;
