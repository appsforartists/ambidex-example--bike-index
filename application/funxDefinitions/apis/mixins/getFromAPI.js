var mach = require("mach");

module.exports = {
  "getFromAPI":                 function (path) {
                                  this._apiCallsInProgress = this._apiCallsInProgress || {};

                                  this._apiCallsInProgress[path] = (
                                    this._apiCallsInProgress[path]

                                    ||

                                    mach.get(
                                      this.settings.CUSTOM_SETTINGS.API_BASE_URL + path
                                    ).then(
                                      connection => {
                                        delete this._apiCallsInProgress[path];

                                        return JSON.parse(connection.responseText)
                                      }
                                    ).catch(
                                      error => {
                                        console.error(error.stack);
                                        console.error("while processing: ", requestMetadata);

                                        delete this._apiCallsInProgress[path];
                                      }
                                    )
                                  );

                                  return this._apiCallsInProgress[path];
                                }
};
