var React       = require("react/addons");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

var Card = React.createClass(
  {

    "render":                     function () {
                                    var cardType = this.props.subtitle
                                      ? "polaroidTitle"
                                      : "overlaidTitle";

                                    switch (cardType) {
                                      case "overlaidTitle":
                                        return  <div
                                                  className = { `Card ${ cardType } ${ this.props.className || "" }` }
                                                >
                                                  <Link
                                                    className = "Title"
                                                    to        = { this.props.linkTo }
                                                    params    = { this.props.linkParams }
                                                  >
                                                    { this.props.title }
                                                  </Link>

                                                  <div className = "Image">
                                                    { this.props.image }
                                                  </div>

                                                  <div className = "BottomBar">
                                                    <div className = "ActionButtons">
                                                      { this.props.actionButtons }
                                                    </div>
                                                  </div>
                                                </div>;

                                      case "polaroidTitle":
                                        return  <div
                                                  className = { `Card ${ cardType } ${ this.props.className || "" }` }
                                                >
                                                  <Link
                                                    className = "Image"
                                                    to        = { this.props.linkTo }
                                                    params    = { this.props.linkParams }
                                                  >
                                                    { this.props.image }
                                                  </Link>

                                                  <div className = "BottomBar">
                                                    <Link
                                                      className = "Titles"
                                                      to        = { this.props.linkTo }
                                                      params    = { this.props.linkParams }
                                                    >
                                                      <div className = "Title">
                                                        { this.props.title }
                                                      </div>
                                                      <div className = "Subtitle">
                                                        { this.props.subtitle }
                                                      </div>
                                                    </Link>

                                                    <div className = "ActionButtons">
                                                      { this.props.actionButtons }
                                                    </div>
                                                  </div>
                                                </div>;
                                    }
                                  }
  }
);

module.exports = Card;
