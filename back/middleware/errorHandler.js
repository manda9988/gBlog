// back/middleware/errorHandler.js

function errorHandler(err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send({ error: "Server error" });
}

module.exports = errorHandler;
