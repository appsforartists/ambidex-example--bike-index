var Ambidex     = require("Ambidex");
var React       = require("react/addons");
var ReactRouter = require("react-router");

RouteHandler = ReactRouter.RouteHandler;

var AppBar  = require("./AppBar.jsx");
var SideBar = require("./SideBar.jsx");

var Main = React.createClass(
  {
    "mixins":                     [
                                    Ambidex.mixinCreators.connectStoresToLocalState(
                                      [
                                        "LeftSideBarIsOpen",
                                        "RightSideBarIsOpen"
                                      ]
                                    ),
                                  ],

    "render":                     function () {
                                    var leftSideBar = this.props.leftSideBar
                                      ? <SideBar
                                          side       = "left"
                                          content    = { this.props.leftSideBar }
                                          hideAction = { this.getRefluxAction("hideLeftSideBar") }
                                          isOpen     = { this.state.leftSideBarIsOpen }
                                        />
                                      : "";

                                    var rightSideBar = this.props.rightSideBar
                                      ? <SideBar
                                          side       = "right"
                                          content    = { this.props.rightSideBar }
                                          hideAction = { this.getRefluxAction("hideRightSideBar") }
                                          isOpen     = { this.state.rightSideBarIsOpen }
                                        />
                                      : "";

                                    return  <div className = "Main">
                                              <AppBar
                                                shouldShowNavIcon   = { Boolean(leftSideBar) }
                                                showNavAction       = { this.getRefluxAction("showLeftSideBar") }
                                                imagesURL           = { this.props.staticURL + "images/" }
                                                makeLogoSilhouette  = { this.props.makeLogoSilhouette }
                                                logoSrc             = { this.props.logoSrc }
                                                actionButtons       = { this.props.appBarActionButtons }
                                              />

                                              { leftSideBar }

                                              <div className = "Content">
                                                <RouteHandler />
                                              </div>

                                              { rightSideBar }
                                            </div>;
                                  }
  }
);

module.exports = Main;
