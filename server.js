const { Client } = require('pg');
var express = require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const client = new Client({
  connectionString: "postgres://bvtcewjuoucpei:ff65b3a7d5ff67c1a74cc57cdf0cbfb5ede16358394efbfdbed3de829d892b8d@ec2-52-207-90-231.compute-1.amazonaws.com:5432/d5gchmvrhumllp",
  ssl: { rejectUnauthorized: false },
});

client.connect();	

var myapp = express();
const path = require('path');
const router = express.Router();

myapp.use(function(req, res, next){ 
req.headers['content-type'] = "application/json"; 
next();
});

myapp.get('/', function(req, res) {
   res.sendFile( __dirname);
   res.sendFile(path.join(__dirname + '/Transactions/index.html'));
});
myapp.use(express.static(__dirname + '/Transactions'));
myapp.use(bodyParser.urlencoded({ extended: true }));
myapp.use(bodyParser.json());

const portr = process.env.PORT || 3000;

myapp.listen(portr);
