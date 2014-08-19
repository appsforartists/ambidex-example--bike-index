/**
 * @jsx React.DOM
 */

var React = require("react");

var IconButton = require("./IconButton.jsx");

module.exports = React.createClass(
  {
    "render":             function () {
                            return  <div
                                      className = "AppBar"
                                    >
                                      <a
                                        href      = "/"
                                        className = "Logo"
                                      >
                                        <img src = { this.props.logoSrc } />
                                      </a>

                                      <div className = "Actions">
                                        { this.props.actions }
                                      </div>
                                    </div>;
                          }
  }
);
