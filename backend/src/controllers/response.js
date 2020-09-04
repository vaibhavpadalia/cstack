/**
 * @author Vaibhav Padalia
 * @description Send response to frontend.
 */

exports.onError = (res, message, code, err = null) => {
  let body = {
    responseCode: code,
    message: message,
    success: false
  };
  res.json(body);
};

exports.onSuccess = (res, result, message, code) => {
  message = message || "";
  let body = {
    responseCode: code,
    result: result,
    success: true,
    message: message
  };
  res.json(body);
};
