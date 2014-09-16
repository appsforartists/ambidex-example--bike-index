/**
 * @jsx React.DOM
 */

var React       = require("react");
var ReactRouter = require("react-router");

module.exports = React.createClass(
  {
    "render":             function () {
                            /*  ReactRouter will break if you try to make a Link without
                             *  a `to` attribute, but <IconButton> should work with 
                             *  internal links, external links, or onClick handlers.
                             *
                             *  Therefore, we dynamically construct the button using
                             *  either <Link> or <a>, as appropriate.
                             */
                            var linkClass;
                            var linkAttributes = {
                              "className":  "IconButton",
                              "onClick":    this.props.onClick
                            };

                            if (this.props.hasOwnProperty("linkTo")) {
                              linkClass         = ReactRouter.Link;
                              linkAttributes.to = this.props.linkTo;
                              
                            } else {
                              linkClass           = React.DOM.a;
                              linkAttributes.href = this.props.href;
                            }

                            return linkClass(linkAttributes, <img src = { this.props.src } />);
                          }
  }
);
