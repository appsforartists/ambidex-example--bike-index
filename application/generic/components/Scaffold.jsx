/**
 * @jsx React.DOM
 */

var React = require("react");

module.exports = React.createClass(
  {
    "render":             function () {
                            // use Webpack's bundles for dev, but inline for production
                            var styleTag = this.props.style.hasOwnProperty("src")
                              ? <script
                                  src = { this.props.style.src }
                                ></script>
                              : <script
                                  dangerouslySetInnerHTML = { this.props.style }
                                />;

                            var scriptTag = this.props.script.hasOwnProperty("src")
                              ? <script
                                  src = { this.props.script.src }
                                  defer
                                ></script>
                              : <script
                                  dangerouslySetInnerHTML = { this.props.script }
                                />;

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

                                        <link
                                          rel  = "icon"
                                          href = { this.props.favIconSrc }
                                        />

                                        { styleTag }

                                        { scriptTag }
                                      </head>

                                      <body
                                        dangerouslySetInnerHTML = { this.props.body }
                                      />
                                    </html>;
                          }
  }
);
