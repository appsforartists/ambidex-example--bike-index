var React       = require("react/addons");
var ReactRouter = require("react-router");

var Route  = ReactRouter.Route;

module.exports =  <Route
                    path    = "/"
                    handler = { require('./bike-index/components/Main.jsx') }
                  >
                    <Route
                      path    = "/"
                      name    = "home"
                      handler = { require('./bike-index/components/Home.jsx') }
                    />
                    <Route
                      path    = "/bikes/:bikeID/"
                      name    = "viewBike"
                      handler = { require('./bike-index/components/BikeDetails.jsx') }
                    />
                    <Route
                      path    = "/bikes/:bikeID/edit/"
                      name    = "editBike"
                      handler = { require('./bike-index/components/BikeDetails.jsx') }
                    />
                  </Route>;
