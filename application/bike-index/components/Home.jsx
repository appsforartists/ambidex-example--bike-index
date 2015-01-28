var Ambidex     = require("ambidex");
var React       = require("react");

var StolenBikeCard = require("./StolenBikeCard.jsx");

var Home = React.createClass(
  {
    "mixins":                     [
                                    Ambidex.mixinCreators.connectStoresToLocalState(
                                      "StolenBikes"
                                    ),
                                  ],

    "render":                     function () {
                                    return  <div className = "Home">
                                              <header>
                                                <h1>
                                                  Oh no!
                                                </h1>

                                                <h2>
                                                  These bikes have been stolen recently:
                                                </h2>
                                              </header>

                                              <div className = "StolenBikes">
                                                {
                                                  this.state.stolenBikes.filter(
                                                    bike => bike.photo
                                                  ).map(
                                                    bike => <StolenBikeCard
                                                              model = { bike }
                                                              key   = { bike.id }
                                                            />
                                                  )
                                                }
                                              </div>
                                            </div>;
                                  }
  }
);

module.exports = Home;
