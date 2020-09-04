const express = require("express");
const argv = require("minimist")(process.argv.slice(2));
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const dbConnection = require("./src/services/dbConnection");
const routes = require("./src/routes/v1/routes");
const controller = require("./src/controllers/controller");

// Db configuration
global.export = con = dbConnection.createConnection();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1", routes); // Routes for application

app.get("*", controller.routeNotFound);

// Configure the API domain
var domain = "localhost";
if (argv.domain !== undefined) domain = argv.domain;
else console.log('No --domain=xxx specified, taking default hostname "localhost".');

// Configure the API port
var port = 4400;

// port = 4400 for dev
if (argv.port !== undefined) port = argv.port;
else console.log("No --port=xxx specified, taking default port " + port + ".");

// Set and display the application URL
var applicationUrl = "http://" + domain + ":" + port;
console.log("snapJob API running on " + applicationUrl);

// Start the web server
app.listen(port);
console.log("App Running on port " + port);
