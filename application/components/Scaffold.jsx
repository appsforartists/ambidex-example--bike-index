/**
 * @jsx React.DOM
 */

 var React = require("react");

 module.exports = React.createClass(
  {
    "render":             function () {
                            return  <html>
                                      <head>
                                        <title>
                                          TODO: make titles work
                                        </title>
                                      </head>

                                      <body>
                                        <this.props.activeRouteHandler />
                                      </body>

                                      <script src = "/bundles/jsx.js"></script>
                                    </html>;
                          }
  }
);
