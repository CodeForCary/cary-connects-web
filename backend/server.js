const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cookieParser = require('cookie-parser');
const API_PORT = 3001;
const config = require('./config')
const app = express();
require('dotenv').config()
// this is our MongoDB database
if (process.env.NODE_ENV == 'production') {
  dbRoute = `mongodb://${config.username}:${config.password}@ds235431.mlab.com:35431/mccauleyp`;
} else if (process.env.NODE_ENV == 'test') {
  dbRoute = `mongodb://${config.username}:${config.password}@ds031271.mlab.com:31271/carry_connects_test`
} else {
  dbRoute = `mongodb://${config.username}:${config.password}@ds159661.mlab.com:59661/cary_connects_dev`
}
// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cookieParser());
// append /api for our http requests
const router = require('./routes/router')
app.use("/api", router);
// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
