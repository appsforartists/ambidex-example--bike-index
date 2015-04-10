var React       = require("react");
var Ambidex     = require("ambidex");

var GenericMain = require("gravel").components.Main;
var IconButton  = require("gravel").components.IconButton;

var MyBikes = require("./MyBikes.jsx");

var ghettoPutColorsOnContext = require("../mixinCreators/ghettoPutColorsOnContext");

var Main = React.createClass(
  {
    "mixins":                     [
                                    Ambidex.mixins.Funx,
                                    Ambidex.mixins.Settings,
                                    Ambidex.mixins.Title,

                                    // The color palette requires more thought than I have scope for right now.
                                    // For the time being, let's just pick 5 tints and stick them on context
                                    ghettoPutColorsOnContext(
                                      {
                                        "primary1":         "hsla(210.0, 100.0%,  40.0%, 1.00)",
                                        "primary2":         "hsla(210.0,  49.0%,  28.0%, 1.00)",
                                        "primary3":         "hsla(210.0,  29.0%,  24.3%, 1.00)",
                                        "accent1":          "hsla(192.0,  17.2%,  94.3%, 1.00)",
                                        "accent2":          "hsla(  0.0,   0.0%, 100.0%, 1.00)",

                                        "cardTitle":        "hsla(  0.0,   0.0%, 100.0%, 1.00)",
                                        "cardTitleScrim":   "hsla(  0.0,   0.0%,   0.0%, 0.75)",
                                      }
                                    )
                                  ],

    "sectionTitle":               "The Bike Index",

    "getInitialState":            function () {
                                    return {
                                      "rightSideBarIsOpen":   false,
                                    };
                                   },

    "render":                     function () {
                                    var { STATIC_URL }  = this.getAmbidexSettings().CUSTOM_SETTINGS;

                                    var ghettoColors = this.getGhettoColors();

                                    var ghettoColorPalette = {
                                      "appBarForegroundColor":       ghettoColors.primary2,
                                      "appBarBackgroundColor":       ghettoColors.accent2,
                                      "leftSideBarBackgroundColor":  ghettoColors.primary2,
                                      "rightSideBarBackgroundColor": ghettoColors.primary2,
                                    };


                                    return  <GenericMain
                                              { ...this.props }


                                              { ...ghettoColorPalette }
                                              style                   = {
                                                                          {
                                                                            "backgroundColor":  ghettoColors.primary2,
                                                                            "minWidth":         "100vw",
                                                                            "minHeight":        "100vh",
                                                                          }
                                                                        }

                                              staticURL               = { STATIC_URL + "generic/" }
                                              leftSideBar             = {
                                                                          <nav
                                                                            style = {
                                                                                      {
                                                                                        "color":    ghettoColors.accent1,
                                                                                        "padding":  16,
                                                                                      }
                                                                                    }
                                                                          >
                                                                            Put your nav here
                                                                          </nav>
                                                                        }

                                              logoSrc                 = { STATIC_URL + "bike-index/images/logo-one-line.svg" }
                                              makeLogoSilhouette      = { true }

                                              appBarActionButtons     = {
                                                                          <div>
                                                                            <IconButton
                                                                              src               = { STATIC_URL + "bike-index/images/man-on-bike.svg" }
                                                                              makeSilhouette    = { true }
                                                                              onTouchTap        = { this.getFunxAction("showRightDrawer") }
                                                                              silhouetteColor   = { ghettoColorPalette.appBarForegroundColor }
                                                                            />
                                                                          </div>
                                                                        }

                                              rightSideBar            = {
                                                                          <MyBikes />
                                                                        }
                                            />;
                                  }
  }
);

module.exports = Main;
