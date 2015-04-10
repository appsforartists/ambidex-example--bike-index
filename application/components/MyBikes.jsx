var Ambidex     = require("ambidex");
var React       = require("react");

var {
  AppBar,
  IconButton
} = require("gravel").components;

var {
  HeadlineText
} = require("gravel").components.texts;

var MyBikeCard        = require("./MyBikeCard");
var GhettoColorMixin  = require("../mixins/GhettoColor");

var MyBikes = React.createClass(
  {
    "mixins":                     [
                                    GhettoColorMixin,
    //                                 Ambidex.mixinCreators.connectStoresToLocalState(
    //                                   "MyBikes"
    //                                 ),
                                  ],

    "getInitialState":            function () {
                                    return {
                                      "myBikes":  [
                                                    {
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
                                                  }, {
                                                      "id": 1041,
                                                      "title": "2000 Gary Fisher Marlin",
                                                      "serial": "GV905509",
                                                      "manufacturerName": "Gary Fisher",
                                                      "frameModel": "Marlin",
                                                      "year": 2000,
                                                      "frameColors": ["Blue"],
                                                      "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/825/small_IMG_20130616_172313.jpg",
                                                      "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/825/large_IMG_20130616_172313.jpg",
                                                      "isStockImg": false,
                                                      "stolen": false,
                                                      "stolenLocation": null,
                                                      "dateStolen": null,
                                                      "registrationCreatedAt": 1382761938,
                                                      "registrationUpdatedAt": 1427951725,
                                                      "url": "https://bikeindex.org/bikes/1041",
                                                      "apiURL": "https://bikeindex.org/api/v1/bikes/1041",
                                                      "manufacturerID": 149,
                                                      "paintDescription": null,
                                                      "name": "Fisher",
                                                      "frameSize": "m",
                                                      "description": "",
                                                      "rearTireNarrow": false,
                                                      "frontTireNarrow": false,
                                                      "typeOfCycle": "Bike",
                                                      "testBike": false,
                                                      "rearWheelSizeIsoBsd": 559,
                                                      "frontWheelSizeIsoBsd": 559,
                                                      "handlebarTypeSlug": "flat",
                                                      "frameMaterialSlug": "aluminum",
                                                      "frontGearTypeSlug": "3",
                                                      "rearGearTypeSlug": "8",
                                                      "stolenRecord": null,
                                                      "publicImages": [{
                                                          "name": "2000 Gary Fisher Marlin bicycle Blue",
                                                          "full": "https://bikeindex.s3.amazonaws.com/uploads/Pu/825/IMG_20130616_172313.jpg",
                                                          "large": "https://bikeindex.s3.amazonaws.com/uploads/Pu/825/large_IMG_20130616_172313.jpg",
                                                          "medium": "https://bikeindex.s3.amazonaws.com/uploads/Pu/825/medium_IMG_20130616_172313.jpg",
                                                          "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/825/small_IMG_20130616_172313.jpg"
                                                      }, {
                                                          "name": "2000 Gary Fisher Marlin bicycle Blue",
                                                          "full": "https://bikeindex.s3.amazonaws.com/uploads/Pu/568/977239_10101589126135315_90835821_o.jpg",
                                                          "large": "https://bikeindex.s3.amazonaws.com/uploads/Pu/568/large_977239_10101589126135315_90835821_o.jpg",
                                                          "medium": "https://bikeindex.s3.amazonaws.com/uploads/Pu/568/medium_977239_10101589126135315_90835821_o.jpg",
                                                          "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/568/small_977239_10101589126135315_90835821_o.jpg"
                                                      }],
                                                      "components": [],
                                                      "detailLevel": 1
                                                    }
                                                  ]
                                  }
                                },

    "render":                     function () {
                                    var ghettoColors = this.getGhettoColors();

                                    return  <div>
                                              <HeadlineText
                                                style = {
                                                          {
                                                            "color":  ghettoColors.accent1,

                                                            ...styles.header,
                                                          }
                                                        }
                                              >
                                                My Bikes
                                              </HeadlineText>

                                              <div style = { styles.cards }>
                                                {
                                                  this.state.myBikes.map(
                                                    bike => <MyBikeCard
                                                              model = { bike }
                                                              key   = { bike.id }
                                                            />
                                                  )
                                                }
                                              </div>
                                            </div>;
                                  }
  }
);

var styles = {
  "header": {
              "height":                       AppBar.HEIGHT,
              "padding":                      IconButton.PADDING,
              "textAlign":                    "center",
              "margin":                       0,
              "marginBottom":                 8,
            },

  "cards":  {
              "display":                      "block",
            }
};

module.exports = MyBikes;
