var Immutable = require("immutable");

/*  This file is just a mock to expose the current user's bike IDs.

 *  Since we shouldn't presume whoever's exploring this repo has a Bike
 *  Index account, there's no reason to add the rigmarole of login.          */

var MyProfile = {
  "serialize":        function (lastValue) {
                        return lastValue.toJSON();
                      },

  "deserialize":      function (serializedLastValue) {
                        return  Immutable.Map(
                                  {
                                    "bikeIDs":  Immutable.OrderedSet(serializedLastValue.bikeIDs)
                                  }
                                );
                      },

  "getInitialValue":  function () {
                        return  Immutable.Map(
                                  {
                                    "bikeIDs":  Immutable.OrderedSet(["1035", "1041"])
                                  }
                                );
                      },

  "getOrFetch":       function (_, lastValue) {
                        return lastValue;
                      },

  "actionHandlers":   {
                      }
};

module.exports = MyProfile;
