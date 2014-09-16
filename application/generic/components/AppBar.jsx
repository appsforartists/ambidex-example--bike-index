/**
 * @jsx React.DOM
 */

var React = require("react");

var IconButton = require("./IconButton.jsx");

var settings = require("../../settings");

module.exports = React.createClass(
  {
    "render":             function () {
                            if (this.props.shouldShowNavIcon) {
                              var maybeNavIcon =  <IconButton
                                                    src        = { settings.STATIC_URL + "generic/images/nav.svg" }
                                                    onTouchTap = { this.props.showNavAction }
                                                  />
                            }

                            return  <nav
                                      className = "AppBar"
                                    >
                                      { maybeNavIcon }
                                      
                                      <a
                                        href      = "/"
                                        className = "Logo"
                                      >
                                        <img src = { this.props.logoSrc } />
                                      </a>

                                      <div className = "ActionButtons">
                                        { this.props.actionButtons }
                                      </div>
                                    </nav>;
                          }
  }
);
