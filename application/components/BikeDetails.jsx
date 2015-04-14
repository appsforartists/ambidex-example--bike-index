var React       = require("react/addons");
var ReactRouter = require("react-router");
var Immutable   = require("immutable");
var Ambidex     = require("ambidex");

var {
  HeadlineText,
  SubheadlineText,
  Body1Text,
  Body2Text,
} = require("gravel").components.texts;

var autoprefixStyleProp = require("autoprefix-style-prop");

var GhettoColorMixin = require("../mixins/GhettoColor");


var BikeDetails = React.createClass(
  {
    "mixins":                     [
                                    Ambidex.mixinCreators.connectStoresToLocalState(
                                      [
                                        "currentBike"
                                      ]
                                    ),

                                    Ambidex.mixins.Title,
                                    GhettoColorMixin,
                                  ],

    "getSectionTitle":            function () {
                                    var model = this.state.currentBike;

                                    if (model)
                                      return model.name || model.title;
                                  },

    "render":                     function () {
                                    var model = this.state.currentBike;
                                    var photos = model.publicImages || Immutable.List([model.largeImg]);

                                    var ghettoColors = this.getGhettoColors();

                                    var containerStyle = {
                                      "color": ghettoColors.accent1
                                    };

                                    if (!model) {
                                      return  <div style = { containerStyle }>
                                                Loading…
                                              </div>
                                    }

                                    return  <div style = { containerStyle }>
                                              <ul style = { styles.photos }>
                                                {
                                                  photos.map(
                                                    imageMetadata =>  <li
                                                                        key   = { imageMetadata.large }
                                                                        style = { styles.photoContainer }
                                                                      >
                                                                        <img
                                                                          src   = { imageMetadata.large }
                                                                          style = { styles.photo }
                                                                        />
                                                                      </li>
                                                  )
                                                }
                                              </ul>

                                              <div style = { styles.body }>
                                                <header style = { styles.header }>
                                                  <HeadlineText>
                                                    { model.name }
                                                  </HeadlineText>

                                                  <SubheadlineText>
                                                    { model.title }
                                                  </SubheadlineText>
                                                </header>

                                                <Body1Text style = { styles.description }>
                                                  { model.description }
                                                </Body1Text>

                                                <table style = { styles.componentsTable }>
                                                  <tbody>
                                                    {
                                                      (model.components || []).filter(
                                                        component => component.manufacturerName && component.modelName
                                                      ).map(
                                                        (component, i) =>   <tr
                                                                              key = { i }
                                                                            >
                                                                              <td
                                                                                style = {
                                                                                  {
                                                                                    "backgroundColor":  ghettoColors.accent2,
                                                                                    "color":            ghettoColors.primary1,

                                                                                    ...styles.componentsCell
                                                                                  }
                                                                                }
                                                                              >
                                                                                <Body2Text>
                                                                                  { component.componentType }
                                                                                </Body2Text>
                                                                              </td>
                                                                              <td
                                                                                style = {
                                                                                  {
                                                                                    "backgroundColor":  ghettoColors.accent2,
                                                                                    "color":            ghettoColors.primary2,

                                                                                    ...styles.componentsCell
                                                                                  }
                                                                                }
                                                                              >
                                                                                <Body2Text>
                                                                                  { `${ component.manufacturerName } ${ component.modelName }` }
                                                                                </Body2Text>
                                                                              </td>
                                                                            </tr>
                                                      )
                                                    }
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>;
                                  }
  }
);

var photoContainerHeight = 234;

var styles = {
  "header":           {
                        "textAlign":                     "center",
                      },

  "body":             {
                       "padding":                        16,
                      },

  "description":      {
                       "padding":                        16,
                      },

  "photos":           autoprefixStyleProp(
                        {
                          "flexDirection":                  "row",
                          "height":                         photoContainerHeight,
                          "width":                          "100vw",
                          "overflowX":                      "scroll",
                        }
                      ),

  "photoContainer":   autoprefixStyleProp(
                        {
                          "flex":                           "none",
                          "listStyleType":                  "none",
                        }
                      ),

  "photo":            {
                        "maxWidth":                       "99vw",
                        "maxHeight":                      photoContainerHeight,

                        "backgroundColor":                "white",
                      },

  "componentsTable":  {
                        "textTransform":                  "capitalize",
                      },

  "componentsCell":   {
                        "padding":                        16,
                      },
};

module.exports = BikeDetails;
