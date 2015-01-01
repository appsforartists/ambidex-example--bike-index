var Lazy = require("lazy.js");

var MyBikes = {
  "dependencies": {
                    "actions":   [
                                  "getBike"
                                ],

                    "stores":   [
                                  "Bikes"
                                ]
                  },

  "actions":      [
                    "getMyBikes"
                  ],

  "store":        {
                    "init":               function () {
                                            // bikeIDs are hardcoded because introspecting them
                                            // requires login (and OAuth), both of which make
                                            // for an uninviting demo
                                            this.bikeIDs = [
                                              1035,
                                              1041
                                            ];

                                            this.state = [];

                                            this.listenTo(
                                              this.parent.stores.Bikes,
                                              this.onBikesUpdated
                                            );
                                          },

                    "onGetMyBikes":       function () {
                                            if (this.state[0] && this.state[1]) {
                                              this.trigger(this.state);

                                              return;
                                            }

                                            this.bikeIDs.forEach(
                                              bikeID => this.parent.actions.getBike(bikeID)
                                            );
                                          },

                    "onBikesUpdated":     function (bikes) {
                                            this.bikeIDs.forEach(
                                              (bikeID, i) => {
                                                if (bikes[bikeID]) {
                                                  this.state[i] = bikes[bikeID];
                                                }
                                              }
                                            );

                                            if (this.state[0] && this.state[1])
                                              this.trigger(this.state);
                                          },
                  },
};

module.exports = MyBikes;
