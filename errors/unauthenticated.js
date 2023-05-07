const CutstomAPIError = require("./custom-error");

class UnauthenticatedError extends CutstomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnauthenticatedError;
