var Ambidex     = require("Ambidex");
var React       = require("react");

var MyBikeCard = require("./MyBikeCard.jsx");

var MyBikes = React.createClass(
  {
    "mixins":                     [
                                    Ambidex.mixinCreators.connectStoresToLocalState(
                                      "MyBikes"
                                    ),
                                  ],

    "render":                     function () {
                                    return  <div className = "MyBikes">
                                              <h1>
                                                My Bikes
                                              </h1>

                                              <div className = "Cards">
                                                {
                                                  this.state.myBikes.map(
                                                    bike => <MyBikeCard
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

module.exports = MyBikes;
