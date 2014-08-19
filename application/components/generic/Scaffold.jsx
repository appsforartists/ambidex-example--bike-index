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

                                        <meta
                                          name    = "viewport"
                                          content = "
                                                      width=device-width,
                                                      initial-scale=1
                                                    "
                                        />

                                        <script
                                          src = { this.props.scriptSrc }
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
