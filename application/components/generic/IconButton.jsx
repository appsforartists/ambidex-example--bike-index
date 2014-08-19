/**
 * @jsx React.DOM
 */

var React = require("react");

module.exports = React.createClass(
  {
    "render":             function () {
                            return  <a
                                      className = "IconButton"
                                      href      = { this.props.href }
                                    >
                                      <img src = { this.props.src } />
                                    </a>;
                          }
  }
);
