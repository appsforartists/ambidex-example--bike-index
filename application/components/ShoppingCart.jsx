/**
 * @jsx React.DOM
 */

var React = require("react");
var ReactRouter = require("react-router");

module.exports = React.createClass(
  {
    "render":             function () {
                            return  <div>
                                      hello from ShoppingCart!

                                      <ReactRouter.Link to = "home">
                                        Click to see home.
                                      </ReactRouter.Link>
                                    </div>;
                          }
  }
);
