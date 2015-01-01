var React       = require("react/addons");
var ReactRouter = require("react-router");
var classSet    = React.addons.classSet;

var Silhouette = require("./Silhouette.jsx");

var IconButton = React.createClass(
  {
    "propTypes":                  {
                                    "className":      React.PropTypes.string,
                                    "onTouchTap":     React.PropTypes.func,
                                    "linkTo":         React.PropTypes.string,
                                    "href":           React.PropTypes.string,
                                    "label":          React.PropTypes.string,
                                    "makeSilhouette": React.PropTypes.bool,
                                  },

    "getDefaultProps":            function () {
                                    return {
                                      "makeSilhouette":   false
                                    }
                                  },

    "render":                     function () {
                                    /*  ReactRouter will break if you try to make a Link without
                                     *  a `to` attribute, but <IconButton> should work with
                                     *  internal links, external links, or onTouchTap handlers.
                                     *
                                     *  Therefore, we dynamically construct the button using
                                     *  either <Link> or <a>, as appropriate.
                                     */
                                    var LinkClass;
                                    var linkAttributes = {
                                      "className":  classSet(
                                                      "IconButton",
                                                      this.props.className
                                                    ),
                                    };

                                    if (this.props.linkTo) {
                                      LinkClass         = ReactRouter.Link;
                                      linkAttributes.to = this.props.linkTo;
                                    
                                    } else {
                                                            // React.DOM.a is now just "a"
                                      LinkClass           = "a";
                                      linkAttributes.href = this.props.href;
                                    }

                                    var ImageClass = this.props.makeSilhouette
                                      ? Silhouette
                                      : "img";
                                    
                                    return  <LinkClass 
                                              { ...this.props } 
                                              { ...linkAttributes }
                                            >
                                              <ImageClass src = { this.props.src } />
                                    
                                              {
                                                this.props.label
                                                  ? <label>
                                                      { this.props.label }
                                                    </label>
                                                  : ""
                                              }
                                            </LinkClass>;
                                  }
  }
);

module.exports = IconButton;
