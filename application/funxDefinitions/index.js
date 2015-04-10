var Immutable = require("immutable");

var funxDefinitions = Immutable.fromJS(
  {
    "apiDefinitions":     require("./apis"),
    "storeDefinitions":   require("./stores"),
  }
).mergeDeep(
  Immutable.fromJS(
    require("gravel").funxDefinitions
  )
).toJSON();

module.exports = funxDefinitions;
