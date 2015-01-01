var React       = require("react/addons");

var Silhouette = React.createClass(
  {
    "render":                     function () {
                                    return  <div 
                                              className = {
                                                            [
                                                              "Silhouette",
                                                              this.props.className || ""
                                                            ].join(" ")
                                                          }
                                              style     = {
                                                            {
                                                              "WebkitMaskImage": `url(${ this.props.src })`
                                                            }
                                                          }
                                            >
                                              <img src = { this.props.src } />
                                            </div>;
                                  }
  }
);

module.exports = Silhouette;
