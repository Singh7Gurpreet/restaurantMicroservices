const errorHandling = (err, req, res, next) => {
  console.error('Error', err.message);
  res.status(err.statusCode || 500).send({ message: err.message });
};

module.exports = errorHandling;
