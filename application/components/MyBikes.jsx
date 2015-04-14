var Ambidex     = require("ambidex");
var React       = require("react");

var {
  AppBar,
  IconButton
} = require("gravel").components;

var {
  HeadlineText
} = require("gravel").components.texts;

var MyBikeCard        = require("./MyBikeCard");
var GhettoColorMixin  = require("../mixins/GhettoColor");

var MyBikes = React.createClass(
  {
    "mixins":                     [
                                    GhettoColorMixin,

                                    Ambidex.mixinCreators.connectStoresToLocalState(
                                      [
                                        "myBikes",
                                      ]
                                    ),
                                  ],

    "render":                     function () {
                                    var ghettoColors = this.getGhettoColors();

                                    return  <div>
                                              <HeadlineText
                                                style = {
                                                          {
                                                            "color":  ghettoColors.accent1,

                                                            ...styles.header,
                                                          }
                                                        }
                                              >
                                                My Bikes
                                              </HeadlineText>

                                              <div style = { styles.cards }>
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

var styles = {
  "header": {
              "height":                       AppBar.HEIGHT,
              "padding":                      IconButton.PADDING,
              "textAlign":                    "center",
              "margin":                       0,
              "marginBottom":                 8,
            },

  "cards":  {
              "display":                      "block",
            }
};

module.exports = MyBikes;
