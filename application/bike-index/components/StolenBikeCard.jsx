var React       = require("react/addons");
var ReactRouter = require("react-router");
var Ambidex     = require("ambidex");

var Link = ReactRouter.Link;

var Card = require("../../generic/components/Card.jsx");

var StolenBikeCard = React.createClass(
  {
    "render":                     function () {
                                    var model = this.props.model;

                                    return  <Card
                                              className     = "StolenBikeCard"

                                              linkTo        = "viewBike"
                                              linkParams    = {
                                                                {
                                                                  "bikeID":   model.id
                                                                }
                                                              }

                                              image         = {
                                                                <img src = { model.thumb } />
                                                              }

                                              title         = { model.title }
                                              subtitle      = { model.stolenLocation || " " }
                                            />;
                                  }
  }
);

module.exports = StolenBikeCard;

