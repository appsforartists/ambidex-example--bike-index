var React       = require("react/addons");
var ReactRouter = require("react-router");
var Ambidex     = require("Ambidex");

var Link = ReactRouter.Link;

var Card = require("../../generic/components/Card.jsx");

var MyBikeCard = React.createClass(
  {

    "render":                     function () {
                                    return  <Card
                                              className     = "MyBikeCard"

                                              linkTo        = "viewBike"
                                              linkParams    = {
                                                                {
                                                                  "bikeID":   this.props.model.id
                                                                }
                                                              }

                                              image         = {
                                                                <div className = "Photos">
                                                                  {
                                                                    this.props.model.images.map(
                                                                      imageMetadata =>  <img
                                                                                          key = { imageMetadata.image.medium.url }
                                                                                          src = { imageMetadata.image.medium.url }
                                                                                        />
                                                                    )
                                                                  }
                                                                </div>
                                                              }

                                              title         = { this.props.model.name }

                                              actionButtons = {
                                                                <Link
                                                                  className = "Edit Button"
                                                                  to        = "editBike"
                                                                  params    = {
                                                                                {
                                                                                  "bikeID":   this.props.model.id
                                                                                }
                                                                              }
                                                                >
                                                                  Edit
                                                                </Link>
                                                              }
                                            />;
                                  }
  }
);

module.exports = MyBikeCard;

