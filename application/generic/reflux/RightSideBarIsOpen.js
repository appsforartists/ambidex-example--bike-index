var RightSideBarIsOpen = {
  "actions":      [
                    "showRightSideBar",
                    "hideRightSideBar"
                  ],

  "store":        {
                    "init":               function () {
                                            this.state = false;

                                            this.trigger(this.state);
                                          },

                    "onShowRightSideBar": function () {
                                            this.state = true;

                                            this.trigger(this.state);
                                          },

                    "onHideRightSideBar": function () {
                                            this.state = false;

                                            this.trigger(this.state);
                                          },
                  },
};

module.exports = RightSideBarIsOpen;
