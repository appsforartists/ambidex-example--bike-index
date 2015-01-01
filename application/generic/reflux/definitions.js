var Lazy = require("lazy.js");

module.exports = Lazy(
  [
    "LeftSideBarIsOpen",
    "RightSideBarIsOpen",
  ]
).map(
  key => [key, require(`./${ key }.js`)]
).toObject();
