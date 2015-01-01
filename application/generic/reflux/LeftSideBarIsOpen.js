var LeftSideBarIsOpen = {
  "actions":      [
                    "showLeftSideBar",
                    "hideLeftSideBar"
                  ],

  "store":        {
                    "init":               function () {
                                            this.state = false;

                                            this.trigger(this.state);
                                          },

                    "onShowLeftSideBar":  function () {
                                            this.state = true;

                                            this.trigger(this.state);
                                          },

                    "onHideLeftSideBar":  function () {
                                            this.state = false;

                                            this.trigger(this.state);
                                          },
                  },
};

module.exports = LeftSideBarIsOpen;
