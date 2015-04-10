var Ambidex     = require("ambidex");
var React       = require("react");

var Grid = require("gravel").components.Grid;

var {
  Display1Text,
  HeadlineText
} = require("gravel").components.texts;

var StolenBikeCard = require("./StolenBikeCard.jsx");

var GhettoColorMixin = require("../mixins/GhettoColor");

var Home = React.createClass(
  {
    "mixins":                     [
                                    GhettoColorMixin,
    //                                 Ambidex.mixinCreators.connectStoresToLocalState(
    //                                   "StolenBikes"
    //                                 ),
                                  ],

    "getInitialState":            function () {
                                    return {
                                      "stolenBikes":  [
                                                        {
                                                            "id": 42455,
                                                            "title": "2010 WorkCycles Oma",
                                                            "serial": "152412",
                                                            "manufacturerName": "WorkCycles",
                                                            "frameModel": "Oma",
                                                            "year": 2010,
                                                            "frameColors": ["Black"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22358/small_4519307363_231e316ef1_o.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22358/large_4519307363_231e316ef1_o.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97212",
                                                            "dateStolen": 1428011102,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42396,
                                                            "title": "2011 Fuji Absolute 3.0",
                                                            "serial": "absent",
                                                            "manufacturerName": "Fuji",
                                                            "frameModel": "Absolute 3.0",
                                                            "year": 2011,
                                                            "frameColors": ["Black"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22291/small_11119372_10155267056800467_662852291_n.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22291/large_11119372_10155267056800467_662852291_n.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97210",
                                                            "dateStolen": 1427954897,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42433,
                                                            "title": "2012 Fuji Nevada 2.0",
                                                            "serial": "ICFU12H19974",
                                                            "manufacturerName": "Fuji",
                                                            "frameModel": "Nevada 2.0",
                                                            "year": 2012,
                                                            "frameColors": ["Black"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22336/small_FUJI_MOUNTAIN_BIKE_2.0_NEVAD_BLACK_GREEN_WHITE.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22336/large_FUJI_MOUNTAIN_BIKE_2.0_NEVAD_BLACK_GREEN_WHITE.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Folsom, 95630",
                                                            "dateStolen": 1427954400,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42450,
                                                            "title": "2013 Bianchi Iseo",
                                                            "serial": "absent",
                                                            "manufacturerName": "Bianchi",
                                                            "frameModel": "Iseo",
                                                            "year": 2013,
                                                            "frameColors": ["Black"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22362/small_image.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22362/large_image.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Albuquerque, 87106",
                                                            "dateStolen": 1427954400,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42422,
                                                            "title": "2013 Surly Cross-Check",
                                                            "serial": "M13050500",
                                                            "manufacturerName": "Surly",
                                                            "frameModel": "Cross-Check",
                                                            "year": 2013,
                                                            "frameColors": ["Black"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22324/small_image.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22324/large_image.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Austin, 78731",
                                                            "dateStolen": 1427954400,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42370,
                                                            "title": "2015 Trek LYNC 5",
                                                            "serial": "WTU176C3643J",
                                                            "manufacturerName": "Trek",
                                                            "frameModel": "LYNC 5",
                                                            "year": 2015,
                                                            "frameColors": ["Black"],
                                                            "thumb": null,
                                                            "largeImg": null,
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Seattle, 98102",
                                                            "dateStolen": 1427939910,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42366,
                                                            "title": "1997 Gary Fisher",
                                                            "serial": "wtu2043177m",
                                                            "manufacturerName": "Gary Fisher",
                                                            "frameModel": "",
                                                            "year": 1997,
                                                            "frameColors": ["Red"],
                                                            "thumb": null,
                                                            "largeImg": null,
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Seattle, 98109",
                                                            "dateStolen": 1427935510,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42348,
                                                            "title": "Kona Smoke - Black",
                                                            "serial": "absent",
                                                            "manufacturerName": "Kona",
                                                            "frameModel": "Smoke - Black",
                                                            "year": null,
                                                            "frameColors": ["Black"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22249/small_smoke.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22249/large_smoke.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97217",
                                                            "dateStolen": 1427925003,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42331,
                                                            "title": "Cannondale Road Bike",
                                                            "serial": "5017546",
                                                            "manufacturerName": "Cannondale",
                                                            "frameModel": "Road Bike",
                                                            "year": null,
                                                            "frameColors": ["Brown"],
                                                            "thumb": null,
                                                            "largeImg": null,
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97215",
                                                            "dateStolen": 1427914602,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42330,
                                                            "title": "2015 Giant Defy Composite 2",
                                                            "serial": "g8371466",
                                                            "manufacturerName": "Giant",
                                                            "frameModel": "Defy Composite 2",
                                                            "year": 2015,
                                                            "frameColors": ["Brown"],
                                                            "thumb": null,
                                                            "largeImg": null,
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97215",
                                                            "dateStolen": 1427914274,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42326,
                                                            "title": "1977 Peugeot 22 inch road bike",
                                                            "serial": "y50334058",
                                                            "manufacturerName": "Peugeot",
                                                            "frameModel": "22 inch road bike",
                                                            "year": 1977,
                                                            "frameColors": ["White"],
                                                            "thumb": null,
                                                            "largeImg": null,
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Eugene, 97401",
                                                            "dateStolen": 1427910505,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 30768,
                                                            "title": "Jamis QUEST",
                                                            "serial": "WE8K00295",
                                                            "manufacturerName": "Jamis",
                                                            "frameModel": "QUEST",
                                                            "year": null,
                                                            "frameColors": ["Blue"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/12591/small_14601146569_52e93632c3_b.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/12591/large_14601146569_52e93632c3_b.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "",
                                                            "dateStolen": 1427910485,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42305,
                                                            "title": "Trek 4900 Disc",
                                                            "serial": "absent",
                                                            "manufacturerName": "Trek",
                                                            "frameModel": "4900 Disc",
                                                            "year": null,
                                                            "frameColors": ["Red"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22219/small_used_2001_trek_4900_cleaned.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22219/large_used_2001_trek_4900_cleaned.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97206",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42304,
                                                            "title": "2008 Giant TCR ADVANCED",
                                                            "serial": "absent",
                                                            "manufacturerName": "Giant",
                                                            "frameModel": "TCR ADVANCED",
                                                            "year": 2008,
                                                            "frameColors": ["Blue", "White"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22216/small_image.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22216/large_image.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Tucson, 85705",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42384,
                                                            "title": "2012 Giant Avail 1 (Silver/Blue/White)",
                                                            "serial": "GM1B343",
                                                            "manufacturerName": "Giant",
                                                            "frameModel": "Avail 1 (Silver/Blue/White)",
                                                            "year": 2012,
                                                            "frameColors": ["Silver or Gray"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22285/small_IMG_1117.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22285/large_IMG_1117.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Tucson, 85711",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42460,
                                                            "title": "2011 Cannondale Quick 4",
                                                            "serial": "VM29344",
                                                            "manufacturerName": "Cannondale",
                                                            "frameModel": "Quick 4",
                                                            "year": 2011,
                                                            "frameColors": ["Blue"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22367/small_Bike_photo_2.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22367/large_Bike_photo_2.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Ann Arbor, MI, 48104",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42350,
                                                            "title": "2013 Rocky Mountain Bicycles Altitude 730",
                                                            "serial": "PPK1296826",
                                                            "manufacturerName": "Rocky Mountain Bicycles",
                                                            "frameModel": "Altitude 730",
                                                            "year": 2013,
                                                            "frameColors": ["Black", "Blue"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22253/small_IMG_4629.JPG",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22253/large_IMG_4629.JPG",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97222",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 39944,
                                                            "title": "2012 Cannondale 2QRX3M/WHT",
                                                            "serial": "QM76591",
                                                            "manufacturerName": "Cannondale",
                                                            "frameModel": "2QRX3M/WHT",
                                                            "year": 2012,
                                                            "frameColors": ["White", "Black"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/19987/small_c_12_2QRX3_wht.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/19987/large_c_12_2QRX3_wht.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Seattle, WA, 98102",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42368,
                                                            "title": "2013 Jamis coda",
                                                            "serial": "absent",
                                                            "manufacturerName": "Jamis",
                                                            "frameModel": "coda",
                                                            "year": 2013,
                                                            "frameColors": ["Green"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22261/small_14_codasportfemme_sg.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22261/large_14_codasportfemme_sg.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97211",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42431,
                                                            "title": "Prodeco Phantom X2",
                                                            "serial": "P38110005",
                                                            "manufacturerName": "Prodeco",
                                                            "frameModel": "Phantom X2",
                                                            "year": null,
                                                            "frameColors": ["Black", "Red"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22335/small_817Qlq0RuxL._SX522_.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22335/large_817Qlq0RuxL._SX522_.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "San Jose, CA, 95134",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42333,
                                                            "title": "2014 Specialized Secteur Elite Disc",
                                                            "serial": "WSBC602342212I",
                                                            "manufacturerName": "Specialized",
                                                            "frameModel": "Secteur Elite Disc",
                                                            "year": 2014,
                                                            "frameColors": ["Black"],
                                                            "thumb": "https://bikebook.s3.amazonaws.com/uploads/Fr/3290/small_66183",
                                                            "largeImg": "https://bikebook.s3.amazonaws.com/uploads/Fr/3290/66183",
                                                            "isStockImg": true,
                                                            "stolen": true,
                                                            "stolenLocation": "San Francisco, 94123",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42329,
                                                            "title": "2013 Xtracycle EdgeRunner",
                                                            "serial": "W24H00032",
                                                            "manufacturerName": "Xtracycle",
                                                            "frameModel": "EdgeRunner",
                                                            "year": 2013,
                                                            "frameColors": ["Orange"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22241/small_Xtracycle_photo.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22241/large_Xtracycle_photo.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "San Francisco, 94110",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42449,
                                                            "title": "2010 WorkCycles Oma",
                                                            "serial": "152412",
                                                            "manufacturerName": "WorkCycles",
                                                            "frameModel": "Oma",
                                                            "year": 2010,
                                                            "frameColors": ["Black"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22353/small_bIKEWITHLIGHTS.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22353/large_bIKEWITHLIGHTS.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97212",
                                                            "dateStolen": 1427868000,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42293,
                                                            "title": "2014 Specialized Pitch 650b",
                                                            "serial": "WSBC606049160J",
                                                            "manufacturerName": "Specialized",
                                                            "frameModel": "Pitch 650b",
                                                            "year": 2014,
                                                            "frameColors": ["Red"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22208/small_Olivers_Bike.jpg",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22208/large_Olivers_Bike.jpg",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97206",
                                                            "dateStolen": 1427860236,
                                                            "detailLevel": 0
                                                        }, {
                                                            "id": 42284,
                                                            "title": "2013 Raleigh cadent",
                                                            "serial": "u12yk07568",
                                                            "manufacturerName": "Raleigh",
                                                            "frameModel": "cadent",
                                                            "year": 2013,
                                                            "frameColors": ["Blue"],
                                                            "thumb": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22197/small_cadent.JPG",
                                                            "largeImg": "https://bikeindex.s3.amazonaws.com/uploads/Pu/22197/large_cadent.JPG",
                                                            "isStockImg": false,
                                                            "stolen": true,
                                                            "stolenLocation": "Portland, 97206",
                                                            "dateStolen": 1427853732,
                                                            "detailLevel": 0
                                                        }
                                                      ]
                                    }
                                  },

    "render":                     function () {
                                    var ghettoColors = this.getGhettoColors();

                                    return  <div>
                                              <header
                                                style = {
                                                          {
                                                            "padding":    16,
                                                            "color":      ghettoColors.accent2,
                                                            "textAlign":  "center",
                                                          }
                                                        }
                                              >
                                                <Display1Text>
                                                  Oh no!
                                                </Display1Text>

                                                <HeadlineText>
                                                  These bikes have been stolen recently:
                                                </HeadlineText>
                                              </header>

                                              <Grid>
                                                {
                                                  this.state.stolenBikes.filter(
                                                    bike => bike.thumb
                                                  ).map(
                                                    bike => <StolenBikeCard
                                                              model = { bike }
                                                              key   = { bike.id }
                                                            />
                                                  )
                                                }
                                              </Grid>
                                            </div>;
                                  }
  }
);

module.exports = Home;
