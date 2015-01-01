var React       = require("react/addons");

var SideBar = React.createClass(
  {
    "render":                     function () {
                                    return  <div
                                              className = {
                                                [
                                                  this.props.isOpen
                                                    ? "open"
                                                    : "",
                                                  "SideBar"
                                                ].join(" ")
                                              }
                                            >
                                              <div
                                                className   = "Scrim"
                                                onTouchTap  = {
                                                                event => {
                                                                  event.preventDefault();
                                                                  this.props.hideAction();
                                                                }
                                                              }
                                                ref         = "scrim"
                                              />

                                              <div
                                                className = {
                                                  [
                                                    this.props.side,
                                                    "Drawer"
                                                  ].join(" ")
                                                }
                                              >
                                                <div className = "ScrollPane">
                                                  { this.props.content }
                                                </div>
                                              </div>
                                            </div>;
                                  }
  }
);

module.exports = SideBar;
