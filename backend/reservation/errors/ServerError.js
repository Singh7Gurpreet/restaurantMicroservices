class ServerError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = 500;
  }
}

module.exports = ServerError;
