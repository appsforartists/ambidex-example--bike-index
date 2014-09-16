var Reflux = require("reflux");

var ProfileActions = require("../actions/ProfileActions");

module.exports = Reflux.createStore(
  {
    "init":         function () {
                      this.listenTo(ProfileActions.show, this.showProfile);
                      this.listenTo(ProfileActions.hide, this.hideProfile);
                    },

    "showProfile":  function () {
                      this.trigger(true);
                    },

    "hideProfile":  function () {
                      this.trigger(false);
                    },
  }
);
