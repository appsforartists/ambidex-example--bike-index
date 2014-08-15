/**
 * @jsx React.DOM
 */

var React       = require("react");
var ReactRouter = require("react-router");

var AppBar = require("./AppBar.jsx");

module.exports = React.createClass(
  {
    "render":             function () {
                            return  <div>
                                      <AppBar />

                                      <this.props.activeRouteHandler />
                                    </div>;
                          }
  }
);
