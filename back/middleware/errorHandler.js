// back/middleware/errorHandler.js

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({ error: "Server error" });
}

module.exports = errorHandler;
