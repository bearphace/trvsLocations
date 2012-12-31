var express = require('express');
var fs = require('fs');
var app = express();
var resourceful = require('resourceful');
var myLocArr = [];

var readStream = fs.ReadStream(__dirname + "/transport.csv");

var TrvsLocation = resourceful.define('trvsLocation', function () {
  this.use('couchdb', {
    uri: 'http://127.0.0.1:5984/locations'
  });

  this.string('_id');
  this.string('town');
  this.number('population');
  this.string('provinceCode');
  this.string('townCode');
  this.string('country');
});

readStream.on('data', function(data) { 
	var csvLoc = data.toString();
	var lines = csvLoc.split('\n');
	parseLines(lines);
});

parseLines = function (mArr){
	for (var i = 0; i < mArr.length; i++) {
		var mLine = mArr[i].split(",");
		myLocArr.push(mLine);
    //createLoc(mLine);
    checkUpdateLocation(mLine); 
	};
}

createLoc = function (line){

  var loc = {
      _id: line[0],
      town: line[0],
      population:parseInt(line[2]),
      provinceCode:line[1],
      townCode:line[3],
      country:'Cameroon'
  };
  TrvsLocation.create(loc, function(err, obj) {
    if (err)
    console.log(JSON.stringify(err));
    return  
    console.log(JSON.stringify(obj));
  });
}

checkUpdateLocation = function (line){
  TrvsLocation.find({town: line[0]}, function (err, trvsLocations) {
    var tLoc;

    if (err){
      console.log (500, JSON.stringify(err))
      return;
    }
    if (trvsLocations.length < 1) {
      createLoc(line)
      return;
    }
    tLoc = trvsLocations[0];
    console.log(line[0]+' already exist');
  });
}

app.get('/', function(req, res){
  res.send('We got here!');
});

app.listen(3000);
console.log('Listening on port 3000');