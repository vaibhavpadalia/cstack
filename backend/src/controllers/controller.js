/**
 * @author Vaibhav Padalia
 * @description Controller for the application
 */

const Strings = require("../utils/constants").Strings;
const response = require("./response");

/**
 * @description Fetches list of currencies and their exchange rates available in DB
 * @summary The exchange rates present here takes EUR as base rate
 */

exports.getExchangeRates = async (req, res) => {
  try {
    let result = await con.query("SELECT id, country_name, country_code, exchange_rate FROM exchange_data");
    if (result.length == 0) {
      response.onError(res, Strings.DATA_NOT_FOUND, 204);
    }
    response.onSuccess(res, result, Strings.DATA_FETCHED, 200);
  } catch (error) {
    response.onError(res, Strings.ERROR, 404);
  }
};

/**
 * @description Sends a route not found error message when routes do not exist
 */

exports.routeNotFound = (req, res, next) => {
  response.onError(res, Strings.NOT_FOUND, 404);
};
