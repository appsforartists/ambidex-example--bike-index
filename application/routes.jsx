require("./polyfills.js");

var React       = require("react/addons");
var ReactRouter = require("react-router");

var Route  = ReactRouter.Route;

module.exports =  <Route
                    path    = "/"
                    handler = { require('./components/Main.jsx') }
                  >
                    <Route
                      path    = "/"
                      name    = "home"
                      handler = { require('./components/Home.jsx') }
                    />
                    <Route
                      path    = "/bikes/:bikeID/"
                      name    = "viewBike"
                      handler = { require('./components/BikeDetails.jsx') }
                    />
                    <Route
                      path    = "/bikes/:bikeID/edit/"
                      name    = "editBike"
                      handler = { require('./components/BikeDetails.jsx') }
                    />
                  </Route>;
