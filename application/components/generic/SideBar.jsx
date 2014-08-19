/**
 * @jsx React.DOM
 */

var React       = require("react");
var ReactRouter = require("react-router");

module.exports = React.createClass(
  {
    "render":             function () {
                            return  <div
                                      className = {
                                        [
                                          this.props.side,

                                          "SideBar",

                                          this.props.opened
                                            ? "open"
                                            : ""
                                        ].join(" ")
                                      }
                                    >
                                      <div
                                        className = "scrim"
                                      />

                                      { this.props.content }
                                    </div>;
                          }
  }
);
