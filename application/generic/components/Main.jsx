/**
 * @jsx React.DOM
 */

var React       = require("react");
var ReactRouter = require("react-router");

var AppBar  = require("./AppBar.jsx");
var SideBar = require("./SideBar.jsx");

var NavActions             = require("../actions/NavActions.js");
var NavVisibilityDatastore = require("../datastores/NavVisibilityDatastore.js");

module.exports = React.createClass(
  {
    "getInitialState":    function () {
                            return {
                              "leftSideBarIsOpen":  false
                            };
                          },

    "componentDidMount":  function () {
                            NavVisibilityDatastore.listen(
                              leftSideBarIsOpen => this.setState({"leftSideBarIsOpen": leftSideBarIsOpen})
                            );
                          },

    "render":             function () {
                            var leftSideBar = this.props.leftSideBar 
                              ? <SideBar
                                  side       = "left"
                                  content    = { this.props.leftSideBar }
                                  hideAction = { NavActions.hide }
                                  isOpen     = { this.state.leftSideBarIsOpen }
                                />
                              : "";

                            return  <div>
                                      <AppBar
                                        shouldShowNavIcon = { Boolean(leftSideBar) }
                                        showNavAction     = { NavActions.show }
                                        logoSrc           = { this.props.logoSrc }
                                        actionButtons     = { this.props.appBarActionButtons }
                                      />

                                      { leftSideBar }

                                      <this.props.activeRouteHandler />

                                      <SideBar
                                        side       = "right"
                                        content    = { this.props.rightSideBar }
                                        hideAction = { this.props.rightSideBarHideAction }
                                        isOpen     = { this.props.rightSideBarIsOpen }
                                      />
                                    </div>;
                          }
  }
);
