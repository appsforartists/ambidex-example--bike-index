var React       = require("react/addons");
var ReactRouter = require("react-router");
var Ambidex     = require("Ambidex");

var BikeDetails = React.createClass(
  {
    "mixins":                     [
                                    Ambidex.mixinCreators.connectStoresToLocalState(
                                      "CurrentBike"
                                    ),
                                    Ambidex.mixins.Title,
                                  ],


    "getSectionTitle":            function () {
                                    var model = this.state.currentBike;

                                    return model.name || model.title;
                                  },

    "render":                     function () {
                                    var model = this.state.currentBike;

                                    return  <div className = "BikeDetails">
                                              <ul className = "Photos">
                                                {
                                                  model.images.map(
                                                    imageMetadata =>  <li
                                                                        key = { imageMetadata.image.large.url }
                                                                      >
                                                                        <img
                                                                          src = { imageMetadata.image.large.url }
                                                                        />
                                                                      </li>
                                                  )
                                                }
                                              </ul>

                                              <div className = "Body">
                                                <header>
                                                  <h1>
                                                    { model.name }
                                                  </h1>

                                                  <h2>
                                                    { model.title }
                                                  </h2>
                                                </header>

                                                <p className = "Description">
                                                  { model.description }
                                                </p>

                                                <table className = "Components">
                                                  {
                                                    model.components.filter(
                                                      component => component.manufacturerName && component.modelName
                                                    ).map(
                                                      (component, i) =>   <tr
                                                                            key = { i }
                                                                          >
                                                                            <td>
                                                                              { component.componentType }
                                                                            </td>
                                                                            <td>
                                                                              { `${ component.manufacturerName } ${ component.modelName }` }
                                                                            </td>
                                                                          </tr>
                                                    )
                                                  }
                                                </table>
                                              </div>
                                            </div>;
                                  }
  }
);

module.exports = BikeDetails;
