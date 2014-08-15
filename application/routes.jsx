/**
 * @jsx React.DOM
 */

var React       = require("react");
var ReactRouter = require("react-router");

var Routes = ReactRouter.Routes;
var Route  = ReactRouter.Route;

module.exports = (
  <Routes
    location = "history"
  >
    <Route
      path    = "/"
      handler = { require('./components/Main.jsx') }
    >
      <Route
        path    = "/"
        name    = "home"
        handler = { require('./components/Home.jsx') }
      />

      <Route
        path    = "/cart"
        name    = "cart"
        handler = { require('./components/ShoppingCart.jsx') }
      />
    </Route>
  </Routes>
);
