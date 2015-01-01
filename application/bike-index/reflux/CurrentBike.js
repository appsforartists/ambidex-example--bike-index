var Lazy = require("lazy.js");

var CurrentBike = {
  "dependencies": {
                    "actions":  [
                                  "getBike"
                                ],

                    "stores":   [
                                  "Bikes"
                                ]
                  },

  "actions":      [
                    // Can't use getBike because that collides with the MyBikes hack
                    "viewBike"
                  ],

  "store":        {
                    "init":                           function () {
                                                        // Maybe state needs to be broken up into two concerns:
                                                        // - what should be hydrated/dehydrated
                                                        // - what was the last thing triggered

                                                        this.state = null;

                                                        this.listenTo(
                                                          this.parent.stores.Bikes,
                                                          this.onBikesUpdated
                                                        );
                                                      },

                    "onViewBike":                     function (bikeID) {
                                                        this.bikeID = bikeID;

                                                        // The lines below attempt to work around any race conditions that
                                                        // may occur if onGetBike fires after onBikesUpdated
                                                        //
                                                        // Let's investigate RxJS or Bacon.js to see if this would be easier
                                                        // to model with Observables.

                                                        var bike = this.parent.stores.Bikes.state[this.bikeID];

                                                        if (bike) {
                                                          this.state = bike;
                                                          this.trigger(this.state);

                                                        } else {
                                                          this.parent.actions.getBike(this.bikeID);
                                                        }
                                                      },

                    "onBikesUpdated":                 function (bikes) {
                                                        if (this.bikeID) {
                                                          this.state = bikes[this.bikeID];
                                                          this.trigger(this.state);
                                                        }
                                                      },
                  },
};

module.exports = CurrentBike;

