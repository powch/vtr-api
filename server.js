const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add API routes
app.use(routes);

mongoose.connect("" + process.env.MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
