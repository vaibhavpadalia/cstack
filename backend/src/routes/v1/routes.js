const express = require("express"); // Making Object Of Express
const router = express.Router(); // Using Routing Function of Express
const controller = require("../../controllers/controller");


// Routes for Mobile API

router.route("/getExchangeRates").get(controller.getExchangeRates);


module.exports = router;