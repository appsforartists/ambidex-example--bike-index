var Immutable    = require("immutable");

var index = {
  "stateful":   {
                },

                  // THIS PROBABLY WON'T WORK
                  // the stores are going to be broadcasting their current values.  Need to change
                  // to this.stores.NAME.getOrFetch or make getOrFetch a property of the Map
                  // and if getOrFetch becomes a Map method, it should probably just be fetch
                  // and the get can be automated

                  // ephemeral stores can't access `this` because it breaks DI
                  // maybe i should make `funx` a thing they can access.
                  // but even better, maybe adding `Store` to a dependency name
                  // makes it get the store instead of the value

                  // moreover, maybe a single closure isn't the right syntax for this at all
                  // it would be nice to lose all the ?:s
  "ephemeral":  {                                                             /*  if statements and ternaries suck.  maybe
                                                                               *  each routerState variable should be independent
                                                                               *  so they can be invidiually called as dependencies
                                                                               *  and we could kills the ?:s
                                                                               */





                                            /*  If we had a way of determining which routerState properties
                                             *  were being relied on, we could probably make a default
                                             *  readyToRender that covers most cases by making sure that all the stores
                                             *  that rely on a particular routerState param have been filled
                                             */
                  "readyToRender":          function (routerState) {
                                              return true;
                                            },
                }
};

module.exports = index;
