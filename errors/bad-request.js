const CutstomAPIError = require("./custom-error");

class BadRequest extends CutstomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadRequest;
