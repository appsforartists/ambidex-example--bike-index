var Ambidex     = require("ambidex");
var React       = require("react");

var Grid = require("gravel").components.Grid;

var {
  Display1Text,
  HeadlineText
} = require("gravel").components.texts;

var StolenBikeCard = require("./StolenBikeCard.jsx");

var GhettoColorMixin = require("../mixins/GhettoColor");

var Home = React.createClass(
  {
    "mixins":                     [
                                    Ambidex.mixinCreators.connectStoresToLocalState(
                                      [
                                        "stolenBikes",
                                      ]
                                    ),

                                    GhettoColorMixin,
                                  ],

    "render":                     function () {
                                    var ghettoColors = this.getGhettoColors();

                                    return  <div>
                                              <header
                                                style = {
                                                          {
                                                            "padding":    16,
                                                            "color":      ghettoColors.accent2,
                                                            "textAlign":  "center",
                                                          }
                                                        }
                                              >
                                                <Display1Text>
                                                  Oh no!
                                                </Display1Text>

                                                <HeadlineText>
                                                  These bikes have been stolen recently:
                                                </HeadlineText>
                                              </header>

                                              <Grid>
                                                {
                                                  this.state.stolenBikes.filter(
                                                    bike => bike.thumb
                                                  ).map(
                                                    bike => <StolenBikeCard
                                                              model = { bike }
                                                              key   = { bike.id }
                                                            />
                                                  )
                                                }
                                              </Grid>
                                            </div>;
                                  }
  }
);

module.exports = Home;
