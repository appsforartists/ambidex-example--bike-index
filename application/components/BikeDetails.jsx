var React       = require("react/addons");
var ReactRouter = require("react-router");
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
                                    // Ambidex.mixinCreators.connectStoresToLocalState(
                                    //   "CurrentBike"
                                    // ),
                                    Ambidex.mixins.Title,
                                    GhettoColorMixin,
                                  ],


    "getInitialState":            function () {
                                    return {
                                      "currentBike": {
                                        "id": 1035,
                                        "title": "2012 Soma Juice",
                                        "serial": "TSFBKW0039",
                                        "manufacturerName": "Soma",
                                        "frameModel": "Juice",
                                        "year": 2012,
                                        "frameColors": ["Green"],
                                        "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1419/small_IMG_20140215_154912.jpg",
                                        "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1419/large_IMG_20140215_154912.jpg",
                                        "isStockImg": false,
                                        "stolen": false,
                                        "stolenLocation": null,
                                        "dateStolen": null,
                                        "registrationCreatedAt": 1382729092,
                                        "registrationUpdatedAt": 1427951692,
                                        "url": "https://bikeindex.org/bikes/1035",
                                        "apiURL": "https://bikeindex.org/api/v1/bikes/1035",
                                        "manufacturerID": 368,
                                        "paintDescription": null,
                                        "name": "Avocado",
                                        "frameSize": "20in",
                                        "description": "Green, fat, delicious, and unbelievably smooth;\r\n\r\nLast one up the hill, but the first one down.",
                                        "rearTireNarrow": false,
                                        "frontTireNarrow": false,
                                        "typeOfCycle": "Bike",
                                        "testBike": false,
                                        "rearWheelSizeIsoBsd": 622,
                                        "frontWheelSizeIsoBsd": 622,
                                        "handlebarTypeSlug": "rearward",
                                        "frameMaterialSlug": "steel",
                                        "frontGearTypeSlug": "1",
                                        "rearGearTypeSlug": "continuously-variable",
                                        "stolenRecord": null,
                                        "publicImages": [{
                                            "name": "2012 Soma Juice  Green",
                                            "full": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1419/IMG_20140215_154912.jpg",
                                            "large": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1419/large_IMG_20140215_154912.jpg",
                                            "medium": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1419/medium_IMG_20140215_154912.jpg",
                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1419/small_IMG_20140215_154912.jpg"
                                        }, {
                                            "name": "2012 Soma Juice  Green",
                                            "full": "https://bikeindex.s3.amazonaws.com/uploads/Pu/10582/IMG_20140621_142151.jpg",
                                            "large": "https://bikeindex.s3.amazonaws.com/uploads/Pu/10582/large_IMG_20140621_142151.jpg",
                                            "medium": "https://bikeindex.s3.amazonaws.com/uploads/Pu/10582/medium_IMG_20140621_142151.jpg",
                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/10582/small_IMG_20140621_142151.jpg"
                                        }, {
                                            "name": "2012 Soma Juice  Green",
                                            "full": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1660/IMG_20140322_183901.jpg",
                                            "large": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1660/large_IMG_20140322_183901.jpg",
                                            "medium": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1660/medium_IMG_20140322_183901.jpg",
                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1660/small_IMG_20140322_183901.jpg"
                                        }, {
                                            "name": "2012 Soma Juice  Green",
                                            "full": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1403/IMG_20140210_131459.jpg",
                                            "large": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1403/large_IMG_20140210_131459.jpg",
                                            "medium": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1403/medium_IMG_20140210_131459.jpg",
                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/1403/small_IMG_20140210_131459.jpg"
                                        }, {
                                            "name": "2012 Soma Juice  Green",
                                            "full": "https://bikeindex.s3.amazonaws.com/uploads/Pu/18929/IMG_20150117_141851.jpg",
                                            "large": "https://bikeindex.s3.amazonaws.com/uploads/Pu/18929/large_IMG_20150117_141851.jpg",
                                            "medium": "https://bikeindex.s3.amazonaws.com/uploads/Pu/18929/medium_IMG_20150117_141851.jpg",
                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/18929/small_IMG_20150117_141851.jpg"
                                        }, {
                                            "name": "2012 Soma Juice  Green",
                                            "full": "https://bikeindex.s3.amazonaws.com/uploads/Pu/18928/IMG_20150117_143408.jpg",
                                            "large": "https://bikeindex.s3.amazonaws.com/uploads/Pu/18928/large_IMG_20150117_143408.jpg",
                                            "medium": "https://bikeindex.s3.amazonaws.com/uploads/Pu/18928/medium_IMG_20150117_143408.jpg",
                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/18928/small_IMG_20150117_143408.jpg"
                                        }],
                                        "components": [{
                                            "id": 138848,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "saddle",
                                            "componentGroup": "Additional parts",
                                            "rear": null,
                                            "front": null,
                                            "manufacturerName": "Chromag",
                                            "modelName": "Trailmaster LTD",
                                            "year": null
                                        }, {
                                            "id": 615,
                                            "description": "",
                                            "serialNumber": "WX 007007 13",
                                            "componentType": "saddle",
                                            "componentGroup": "Additional parts",
                                            "rear": null,
                                            "front": null,
                                            "manufacturerName": "Selle Anatomica",
                                            "modelName": "Titanico X",
                                            "year": null
                                        }, {
                                            "id": 147,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "hub",
                                            "componentGroup": "Wheels",
                                            "rear": true,
                                            "front": false,
                                            "manufacturerName": "NuVinci",
                                            "modelName": "n360",
                                            "year": null
                                        }, {
                                            "id": 146,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "crankset",
                                            "componentGroup": "Drivetrain and brakes",
                                            "rear": false,
                                            "front": false,
                                            "manufacturerName": "White Industries",
                                            "modelName": "ENO",
                                            "year": 2013
                                        }, {
                                            "id": 612,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "hub",
                                            "componentGroup": "Wheels",
                                            "rear": null,
                                            "front": true,
                                            "manufacturerName": "Paul",
                                            "modelName": "Disc FHUB",
                                            "year": 2013
                                        }, {
                                            "id": 613,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "rim",
                                            "componentGroup": "Wheels",
                                            "rear": null,
                                            "front": true,
                                            "manufacturerName": "Velocity",
                                            "modelName": "Dyad",
                                            "year": null
                                        }, {
                                            "id": 614,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "rim",
                                            "componentGroup": "Wheels",
                                            "rear": true,
                                            "front": null,
                                            "manufacturerName": "Velocity",
                                            "modelName": "Dyad",
                                            "year": null
                                        }, {
                                            "id": 616,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "brake lever",
                                            "componentGroup": "Drivetrain and brakes",
                                            "rear": null,
                                            "front": true,
                                            "manufacturerName": "Shimano",
                                            "modelName": "Deore T615",
                                            "year": 2014
                                        }, {
                                            "id": 617,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "brake lever",
                                            "componentGroup": "Drivetrain and brakes",
                                            "rear": true,
                                            "front": null,
                                            "manufacturerName": "Shimano",
                                            "modelName": "Deore T615",
                                            "year": 2014
                                        }, {
                                            "id": 618,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "fork",
                                            "componentGroup": "Frame and fork",
                                            "rear": null,
                                            "front": null,
                                            "manufacturerName": "Manitou",
                                            "modelName": "Tower",
                                            "year": 2013
                                        }, {
                                            "id": 623,
                                            "description": "622-50",
                                            "serialNumber": "",
                                            "componentType": "tire",
                                            "componentGroup": "Wheels",
                                            "rear": null,
                                            "front": true,
                                            "manufacturerName": "Schwalbe",
                                            "modelName": "Big Ben",
                                            "year": null
                                        }, {
                                            "id": 624,
                                            "description": "622-50",
                                            "serialNumber": "",
                                            "componentType": "tire",
                                            "componentGroup": "Wheels",
                                            "rear": true,
                                            "front": null,
                                            "manufacturerName": "Schwalbe",
                                            "modelName": "Big Ben",
                                            "year": null
                                        }, {
                                            "id": 625,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "seatpost",
                                            "componentGroup": "Additional parts",
                                            "rear": null,
                                            "front": null,
                                            "manufacturerName": "Kalloy",
                                            "modelName": "Uno Radiussed Top",
                                            "year": null
                                        }, {
                                            "id": 626,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "pedals",
                                            "componentGroup": "Drivetrain and brakes",
                                            "rear": null,
                                            "front": null,
                                            "manufacturerName": "Soma",
                                            "modelName": "Oxford",
                                            "year": null
                                        }, {
                                            "id": 2644,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "handlebar",
                                            "componentGroup": "Additional parts",
                                            "rear": null,
                                            "front": null,
                                            "manufacturerName": "Nitto",
                                            "modelName": "Albatross (steel)",
                                            "year": null
                                        }, {
                                            "id": 93922,
                                            "description": "",
                                            "serialNumber": "",
                                            "componentType": "brake lever",
                                            "componentGroup": "Drivetrain and brakes",
                                            "rear": null,
                                            "front": null,
                                            "manufacturerName": "Shimano",
                                            "modelName": "",
                                            "year": null
                                        }],
                                        "detailLevel": 1
                                      }
                                    }
                                  },

    "getSectionTitle":            function () {
                                    var model = this.state.currentBike;

                                    if (model)
                                      return model.name || model.title;
                                  },

    "render":                     function () {
                                    var model = this.state.currentBike;

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
                                                  model.publicImages.map(
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
                                                      model.components.filter(
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
                        "maxHeight":                      234,

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
