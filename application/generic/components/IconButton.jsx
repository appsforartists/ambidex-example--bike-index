/**
 * @jsx React.DOM
 */

var React       = require("react");
var ReactRouter = require("react-router");
var classSet    = React.addons.classSet;

module.exports = React.createClass(
  {
    "render":             function () {
                            /*  ReactRouter will break if you try to make a Link without
                             *  a `to` attribute, but <IconButton> should work with
                             *  internal links, external links, or onTouchTap handlers.
                             *
                             *  Therefore, we dynamically construct the button using
                             *  either <Link> or <a>, as appropriate.
                             */

                            var linkClass;
                            var linkAttributes = {
                              "className":  classSet(
                                              "IconButton",
                                              this.props.className
                                            ),
                              "onTouchTap": this.props.onTouchTap
                            };

                            if (this.props.linkTo) {
                              linkClass         = ReactRouter.Link;
                              linkAttributes.to = this.props.linkTo;

                            } else {
                              linkClass           = React.DOM.a;
                              linkAttributes.href = this.props.href;
                            }

                            return linkClass(
                              linkAttributes,

                              <img src = { this.props.src } />,

                              this.props.label
                                ? <label>
                                    { this.props.label }
                                  </label>
                                : ""
                            );
                          }
  }
);
