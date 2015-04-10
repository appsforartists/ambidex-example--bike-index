var React       = require("react/addons");
var ReactRouter = require("react-router");
var Ambidex     = require("ambidex");

var Link = ReactRouter.Link;

var Card = require("gravel").components.Card;
var ButtonText = require("gravel").components.texts.ButtonText;

var autoprefixStyleProp = require("autoprefix-style-prop");

var GhettoColorMixin = require("../mixins/GhettoColor");

var MyBikeCard = React.createClass(
  {
    "mixins":                     [
                                    GhettoColorMixin,
                                  ],

    "render":                     function () {
                                    var ghettoColors = this.getGhettoColors();

                                    return  <Card
                                              elevation     = { 2 }
                                              style         = {
                                                                {
                                                                  "margin":           8,
                                                                  "backgroundColor":  ghettoColors.accent2,
                                                                }
                                                              }

                                              linkTo        = "viewBike"
                                              linkParams    = {
                                                                {
                                                                  "bikeID":   this.props.model.id
                                                                }
                                                              }

                                              image         = {
                                                                <div style = { styles.photos }>
                                                                  {
                                                                    this.props.model.publicImages.map(
                                                                      imageMetadata =>  <img
                                                                                          style = { styles.photo }
                                                                                          key   = { imageMetadata.medium }
                                                                                          src   = { imageMetadata.medium }
                                                                                        />
                                                                    )
                                                                  }
                                                                </div>
                                                              }

                                              title         = { this.props.model.name }

                                              actionButtons = {
                                                                <div style = { styles.actionButtons } >
                                                                  <Link
                                                                    to        = "editBike"
                                                                    params    = {
                                                                                  {
                                                                                    "bikeID":   this.props.model.id
                                                                                  }
                                                                                }

                                                                    style     = {
                                                                                  {
                                                                                    "color":  ghettoColors.primary1
                                                                                  }
                                                                                }
                                                                  >
                                                                    <ButtonText>
                                                                      Edit
                                                                    </ButtonText>
                                                                  </Link>
                                                                </div>
                                                              }
                                            />;
                                  }
  }
);

var styles = {
  "photos":         autoprefixStyleProp(
                      {
                        "flexDirection":                "row",
                        "overflowX":                    "scroll",
                        "backgroundColor":              "white",
                      }
                    ),

  "photo":          autoprefixStyleProp(
                      {
                        "flex":                         "none",
                        "height":                       174,
                      }
                    ),

  "actionButtons":  autoprefixStyleProp(
                      {
                        "flexDirection":                "row",
                        "justifyContent":               "flex-end",
                      }
                    ),
};

module.exports = MyBikeCard;

