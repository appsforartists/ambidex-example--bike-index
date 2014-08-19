/**
 * @jsx React.DOM
 */

var React       = require("react");
var ReactRouter = require("react-router");

var AppBar  = require("./AppBar.jsx");
var SideBar = require("./SideBar.jsx");

module.exports = React.createClass(
  {
    "render":             function () {
                            return  <div>
                                      <AppBar
                                        logoSrc = { this.props.logoSrc }
                                        actions = { this.props.appBarActions }
                                      />

                                      <this.props.activeRouteHandler />

                                      <SideBar
                                        side    = "right"
                                        content = { this.props.rightSideBar }
                                      />
                                    </div>;
                          }
  }
);
