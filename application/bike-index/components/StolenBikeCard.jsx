var React       = require("react/addons");
var ReactRouter = require("react-router");
var Ambidex     = require("ambidex");

var Link = ReactRouter.Link;

var Card = require("gravel").components.Card;

var GhettoColorMixin = require("../mixins/GhettoColor");

var StolenBikeCard = React.createClass(
  {
    "mixins":                     [
                                    GhettoColorMixin,
                                  ],

    "render":                     function () {
                                    var model = this.props.model;
                                    var ghettoColors = this.getGhettoColors();

                                    return  <Card
                                              style         = {
                                                                {
                                                                  "color":            ghettoColors.primary3,
                                                                  "backgroundColor":  ghettoColors.accent1,

                                                                  ...styles.container
                                                                }
                                                              }

                                              linkTo        = "viewBike"
                                              linkParams    = {
                                                                {
                                                                  "bikeID":   model.id
                                                                }
                                                              }

                                              image         = {
                                                                // protecting the image from flexbox so it
                                                                // can calculate its own intrinsic size

                                                                <div style = { styles.imageContainer }>
                                                                  <img
                                                                    style = { styles.image }
                                                                    src   = { model.thumb }
                                                                  />
                                                                </div>
                                                              }

                                              title         = { model.title }
                                              subtitle      = { model.stolenLocation || " " }
                                            />;
                                  }
  }
);

var styles = {
  "container":        {
                        "width":  "100%",
                      },

  "imageContainer":   {
                        "width":  "100%",
                      },

  "image":            {
                        "width":  "100%",
                        "height": "auto",
                      },
};

module.exports = StolenBikeCard;

