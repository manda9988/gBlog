// back/middleware/errorHandler.js

function errorHandler(err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send({ error: "Server error" });
}

module.exports = errorHandler;

// Ce fichier définit un middleware d'erreur pour Express.

// La fonction errorHandler enregistre l'erreur dans la console et envoie une réponse avec un statut 500 et un message d'erreur générique en JSON.

// Cela centralise la gestion des erreurs serveur.

// _req et _next indique que les variables ne sont pas utilisées.
