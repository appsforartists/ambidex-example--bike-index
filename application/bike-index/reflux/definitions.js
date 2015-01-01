var Lazy = require("lazy.js");

module.exports = Lazy(
  [
    "Bikes",
    "CurrentBike",
    "MyBikes",
    "StolenBikes"
  ]
).map(
  key => [key, require(`./${ key }.js`)]
).toObject();
