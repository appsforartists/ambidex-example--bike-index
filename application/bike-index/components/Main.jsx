var React       = require("react");
var Ambidex     = require("ambidex");

var GenericMain = require( "../../generic/components/Main.jsx");
var IconButton  = require( "../../generic/components/IconButton.jsx");

var MyBikes = require( "../../bike-index/components/MyBikes.jsx");

var Main = React.createClass(
  {
    "mixins":                     [
                                    Ambidex.mixins.Reflux,
                                    Ambidex.mixins.Settings,
                                    Ambidex.mixins.Title
                                  ],

    "sectionTitle":               "The Bike Index",

    "getInitialState":            function () {
                                    return {
                                      "rightSideBarIsOpen":  false
                                    };
                                   },

    "render":                     function () {
                                    var { STATIC_URL }  = this.getAmbidexSettings().CUSTOM_SETTINGS;

                                    return  <GenericMain
                                              { ...this.props }

                                              staticURL               = { STATIC_URL + "generic/" }
                                              leftSideBar             = {
                                                                          <nav>
                                                                            Put your nav here
                                                                          </nav>
                                                                        }

                                              logoSrc                 = { STATIC_URL + "bike-index/images/logo-one-line.svg" }
                                              makeLogoSilhouette      = { true }

                                              appBarActionButtons     = {
                                                                          <div>
                                                                            <IconButton
                                                                              src             = { STATIC_URL + "bike-index/images/man-on-bike.svg" }
                                                                              makeSilhouette  = { true }
                                                                              onTouchTap      = { this.getRefluxAction("showRightSideBar") }
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
