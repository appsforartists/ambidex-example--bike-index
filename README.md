## Introduction ##

This is a sample application utilizing [**Ambidex**](https://github.com/appsforartists/Ambidex/).  For more information, **please see [that repo](https://github.com/appsforartists/Ambidex/)**.

## Getting Started ##

#### Clone the repository ####
    git clone git@github.com:appsforartists/ambidex-example--bike-index.git

#### Install the dependencies ####
    npm install

#### Add the appropriate lines to `/private/etc/hosts` ####
    127.0.0.1       tardis.local
    127.0.0.1       bikeindex.local

#### Start the server ###
    npm start tardis

_(If you're running an older version of npm, try `node --harmony ./init.js tardis`  It should do the same thing.)_

#### Navigate to the appropriate page in your browser ####
 - http://tardis.local:8080/ or
 - http://bikeindex.local:8080/

## Credits ##

 - Data provided by the [Bike Index](https://bikeindex.org) [API](https://bikeindex.org/documentation/api_v2).
 - Icons courtesy of [Google Material Design](https://github.com/google/material-design-icons).
