var Reflux = require("reflux");

var NavActions = require("../actions/NavActions");

module.exports = Reflux.createStore(
  {
    "init":     function () {
                  this.listenTo(NavActions.show, this.showNav);
                  this.listenTo(NavActions.hide, this.hideNav);
                },

    "showNav":  function () {
                  this.trigger(true);
                },

    "hideNav":  function () {
                  this.trigger(false);
                },
  }
);
