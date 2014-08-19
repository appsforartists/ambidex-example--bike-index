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
      handler = { /* require('./components/__project_name__/Main.jsx') */ require('./components/generic/Main.jsx') }
    >
      { /*
        <Route
          path    = "/"
          name    = "home"
          handler = { require('./components/__project_name__/Home.jsx') }
        />
      */ }
    </Route>
  </Routes>
);
