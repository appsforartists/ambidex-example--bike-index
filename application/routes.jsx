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
      handler = { require('./__your_project_name__/components/Main.jsx') }
    >
      <Route
        path    = "/"
        name    = "home"
        handler = { require('./__your_project_name__/components/Home.jsx') }
      />
    </Route>
  </Routes>
);
