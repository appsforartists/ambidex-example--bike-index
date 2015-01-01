var React       = require("react/addons");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

var IconButton = require("./IconButton.jsx");
var Silhouette = require("./Silhouette.jsx");

var AppBar = React.createClass(
  {
    "propTypes":                  {
                                    "imagesURL":          React.PropTypes.string.isRequired,
                                    "logoSrc":            React.PropTypes.string.isRequired,
                                    "actionButtons":      React.PropTypes.element,
                                    "shouldShowNavIcon":  React.PropTypes.bool,
                                    "showNavAction":      React.PropTypes.func,
                                    "makeLogoSilhouette": React.PropTypes.bool,
                                  },

    "getDefaultProps":            function () {
                                    return {
                                      "makeLogoSilhouette": false
                                    }
                                  },

    "render":                     function () {
                                    if (this.props.shouldShowNavIcon) {
                                      var maybeNavIcon =  <IconButton
                                                            src            = { this.props.imagesURL + "nav.svg" }
                                                            onTouchTap     = { this.props.showNavAction }
                                                            makeSilhouette = { true }
                                                          />
                                    }

                                    var ImageClass = this.props.makeLogoSilhouette
                                      ? Silhouette
                                      : "img";

                                    return  <nav
                                              className = "AppBar"
                                            >
                                              { maybeNavIcon }

                                              <Link
                                                to        = "/"
                                                className = "Logo"
                                              >
                                                <ImageClass src = { this.props.logoSrc } />
                                              </Link>

                                              <div className = "ActionButtons">
                                                { this.props.actionButtons }
                                              </div>
                                            </nav>;
                                  }
  }
);

module.exports = AppBar;
