/**
 * @jsx React.DOM
 */

var React       = require("react");
var Reflux      = require("reflux");

var GenericMain        = require( "../../generic/components/Main.jsx");
var IconButton         = require( "../../generic/components/IconButton.jsx");

var ProfileActions             = require("../../__your_project_name__/actions/ProfileActions.js");
var ProfileVisibilityDatastore = require("../../__your_project_name__/datastores/ProfileVisibilityDatastore.js");

var settings = require("../../settings");

module.exports = React.createClass(
  {
    "mixins":             [
                            // automatically dereferences Reflux when we're unmounted
                            Reflux.ListenerMixin
                          ],

    "getInitialState":    function () {
                            return {
                              "rightSideBarIsOpen":  false
                            };
                          },

    "componentDidMount":  function () {
                            ProfileVisibilityDatastore.listen(
                              rightSideBarIsOpen => this.setState({"rightSideBarIsOpen": rightSideBarIsOpen})
                            );
                          },

    "render":             function () {
                            return  this.transferPropsTo(
                                      <GenericMain
                                        leftSideBar             = {
                                                                    <nav>
                                                                      Put your nav here
                                                                    </nav>
                                                                  }
                                        logoSrc                 = { settings.STATIC_URL + "__your_project_name__/images/logo.svg" }
                                        appBarActionButtons     = {
                                                                    <div>
                                                                      <IconButton
                                                                        src     = { settings.STATIC_URL + "generic/images/profile.svg" }
                                                                        onClick = { ProfileActions.show }
                                                                      />
                                                                    </div>
                                                                  }

                                        rightSideBar            = {
                                                                    <div>
                                                                      Put something here!
                                                                    </div>
                                                                  }
                                        rightSideBarHideAction  = { ProfileActions.hide }
                                        rightSideBarIsOpen      = { this.state.rightSideBarIsOpen }
                                      />
                                    );
                          }
  }
);
