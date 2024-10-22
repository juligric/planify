const ipLocation = require("ip-location");
 
(async () => {
    await ipLocation("172.217.167.78");
    //=> { latitude: -33.8591, longitude: 151.2002, region: { name: "New South Wales" ... } ... }
})();

var ipLocation = require('ip-location')
 
ipLocation('github.com', function (err, data) {
  console.log(data)
})