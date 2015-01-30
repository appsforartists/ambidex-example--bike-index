var Lazy = require("lazy.js");

var BikeModel = require("../models/BikeModel.js");

var StolenBikes = {
  "actions":      [
                    "getStolenBikes"
                  ],

  "store":        Object.assign(
                    {
                      "init":               function () {
                                              this.state = [];
                                            },

                      "onGetStolenBikes":   function () {
                                              if (this.state.length) {
                                                this.trigger(this.state);

                                                if (!this.settings.CUSTOM_SETTINGS["ACTIONS_UPDATE_CACHED_DATA"]) {
                                                  return;
                                                }
                                              }

                                              this.getStolenBikes().then(
                                                stolenBikes => {
                                                  if (Array.isArray(stolenBikes)) {
                                                    this.state = stolenBikes;
                                                    this.trigger(this.state);

                                                  } else {
                                                    throw new Error("Could not find stolen bikes.");
                                                  }
                                                }

                                              ).catch(
                                                error => console.error(error.stack)
                                              );
                                            },

                      "getStolenBikes":     function () {
                                              return this.getFromAPI(`bikes_search/stolen`).then(
                                                response => response.bikes.map(
                                                  bike => BikeModel.fromBikeIndex(
                                                    bike,
                                                    BikeModel.DetailLevel.SUMMARY
                                                  )
                                                )
                                              );
                                            }
                    },

                    require("./mixins/getFromAPI.js")
                  )
};

module.exports = StolenBikes;
