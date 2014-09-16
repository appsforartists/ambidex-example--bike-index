/**
 * @jsx React.DOM
 */

var React       = require("react");
var ReactRouter = require("react-router");

module.exports = React.createClass(
  {
    "iosClickHack":       function () {
                            /* iOS won't let you click things that don't have 
                             * either `cursor: pointer;` or an `onclick` method.
                             *
                             * [More info at React issue #1169](https://github.com/facebook/react/issues/1169)
                             *
                             * This workaround was shamelessly inspired by 
                             * [react-bootstrap's Modal.jsx](https://github.com/react-bootstrap/react-bootstrap/blob/07de801f05ba2816c86a31e74ff8e6afb36ae096/src/Modal.jsx#L114) */

                            this.refs.scrim.getDOMNode().onclick = this.refs.scrim.getDOMNode().onclick || function () {};
                          },

    "componentDidUpdate": function () {
                            this.iosClickHack();
                          },

    "componentDidMount":  function () {
                            this.iosClickHack();
                          },

    "render":             function () {
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
                                        onTouchTap  = { this.props.hideAction }
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
