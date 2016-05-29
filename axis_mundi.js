// used for testing output
// var inspect = require('util').inspect;
var assert = require('assert');

module.exports = function(app) {

  // Home test
  app.get('/', function(req, res) {
    res.status(200).send("Hello");
    console.log("hit /");
  });

  app.get('/light', function(req, res) {
    var iD = req.query.id;
    var location = req.query.location;
    // Do a call {/status} to the device to see the status for the current vars
    if (iD) {
      // Make a get call to the iD
    } else if (location){
      // Make a get call to the location
    } else
      console.log("/light GET: Location and iD were NULL");
  });

  /* Change the light by id or location
  */
  app.post('/light', function(req, res) {
    var iD = req.query.iD;
    var location = req.query.location;
    if (iD) {
      // Make a post call to the iD
    } else if (location){
      // Make a post call to the location
    } else
      console.log("/light POST: Location and iD were NULL");
  });
};
