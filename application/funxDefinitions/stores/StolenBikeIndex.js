var Immutable = require("immutable");

var StolenBikeIndex = {
  "serialize":        function (lastValue) {
                        return lastValue.toJSON();
                      },

  "deserialize":      function (serializedLastValue) {
                        return Immutable.fromJS(serializedLastValue);
                      },

  "getInitialValue":  function () {
                        return Immutable.List();
                      },

  "getOrFetch":       function (query, lastValue) {
                        // TODO: implement query

                        if (lastValue.size !== 0) {
                          return lastValue;

                        } else {
                          this.funx.apis.stolenBikes.get();

                          return null;
                        }
                      },

  "actionHandlers":   {
                        "stolenBikeIndexFragmentLoaded":  function ({ indexFragment, startingPosition }, lastValue) {
                                                            return lastValue.splice(startingPosition, 0, ...indexFragment.toJSON());
                                                          }
                      }
};

module.exports = StolenBikeIndex;
