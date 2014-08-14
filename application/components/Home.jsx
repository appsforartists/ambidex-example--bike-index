/**
 * @jsx React.DOM
 */

 var React       = require("react");
 var ReactRouter = require("react-router");

 module.exports = React.createClass(
  {
    "render":             function () {
                            return  <div>
                                      hello from Home!

                                      <ReactRouter.Link to = "cart">
                                        Click to see cart.
                                      </ReactRouter.Link>
                                    </div>;
                          }
  }
);
