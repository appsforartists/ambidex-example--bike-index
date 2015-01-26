module.exports = {
  "NAME":         "Ambidex Example: BikeIndex",
  "SHORT_NAME":   "ambidex-example--bike-index",
  "FAV_ICON_URL": "/static/bike-index/images/logo.svg",
  
  "TITLE_SEPARATOR":          " - ",
  
  "FILESYSTEM_PATHS":         {
                                "BASE":                            __dirname,
                                "ROUTES":                                   "routes.jsx",
                                "REFLUX_DEFINITIONS":                       "./reflux/definitions.js",
                                "REFLUX_ACTIONS_FOR_ROUTER_STATE":          "./reflux/actionsForRouterState.js",
                                "STYLES":                                   "styles.scss",
                                "BUNDLES":                                  "../bundles/",
                              },
  
  "CUSTOM_SETTINGS":          {
                                "STATIC_URL":                   "/static/",
                                "API_BASE_URL":                 "https://bikeindex.org/api/v1/",
                                "ACTIONS_UPDATE_CACHED_DATA":   true
                              }
};
