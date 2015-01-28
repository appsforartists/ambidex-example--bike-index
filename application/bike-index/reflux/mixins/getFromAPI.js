var mach = require("mach");

module.exports = {
  "getFromAPI":                 function (path) {
                                  return mach.get(
                                    this.settings.CUSTOM_SETTINGS.API_BASE_URL + path 
                                  ).then(
                                    connection => JSON.parse(connection.responseText)
                                  );
                                }
};
