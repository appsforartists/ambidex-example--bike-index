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

                                        <script
                                          src = "/bundles/jsx.js"
                                          defer
                                        ></script>
                                      </head>

                                      <body
                                        dangerouslySetInnerHTML = { this.props.body }
                                      />
                                    </html>;
                          }
  }
);
