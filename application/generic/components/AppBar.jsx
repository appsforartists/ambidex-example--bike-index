/**
 * @jsx React.DOM
 */

var React = require("react");

var IconButton = require("./IconButton.jsx");

var settings = require("../../settings");

module.exports = React.createClass(
  {
    "render":             function () {
                            var logoAndMaybeNavIcon;

                            if (this.props.shouldShowNavIcon) {
                              logoAndMaybeNavIcon = <IconButton
                                                      src     = { settings.STATIC_URL + "generic/images/nav.svg" }
                                                      onClick = { this.props.showNavAction }
                                                    />
                            } else {
                              logoAndMaybeNavIcon = <a
                                                      href      = "/"
                                                      className = "Logo"
                                                    >
                                                      <img src = { this.props.logoSrc } />
                                                    </a>;
                            }

                            return  <nav
                                      className = "AppBar"
                                    >
                                      { logoAndMaybeNavIcon }

                                      <div className = "ActionButtons">
                                        { this.props.actionButtons }
                                      </div>
                                    </nav>;
                          }
  }
);
