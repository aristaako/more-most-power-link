# More Most Power Link client

Client SPA for the more most power link app.

## Overview

Simple web user interface for calling most power link server to calculate link station power.

User enters x and y coordinates and the app tells whether the given point is within range from a link station.
If multiple stations are within range, the information displayed relates to the station with the strongest signal power.

Template from [Create React App](https://github.com/facebook/create-react-app).

## Development

To start the app run:

    $ npm start

## End-to-end testing

Chromedriver 94.0.0 requires version 94 of Chrome browser to work.

To run Nightwatch.js tests run:

    $ npm test

### If Chrome driver gets stuck, running the script will kill the process:

    $ ./killChromeDriver.sh

## Production build

To create a production build run:

    $ npm run build
