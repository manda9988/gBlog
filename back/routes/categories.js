// back/categories.js

// Importation des modules nécessaires
const express = require("express"); // Framework web pour Node.js
const pool = require("../db"); // Pool de connexions pour PostgreSQL
const router = express.Router(); // Routeur pour gérer les routes

// Route pour récupérer toutes les catégories
router.get("/categories", async (_req, res, next) => {
  try {
    const allCategories = await pool.query("SELECT * FROM categories"); // Requête pour sélectionner toutes les catégories
    res.json(allCategories.rows); // Retourner les catégories sous forme de JSON
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
});

module.exports = router; // Exportation du routeur
