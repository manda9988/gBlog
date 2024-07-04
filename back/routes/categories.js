// back/categories.js

// Framework web pour Node.js
const express = require("express");
// Pool de connexions pour PostgreSQL
const pool = require("../db");
// Routeur pour gérer les routes
const router = express.Router();

// Route pour récupérer toutes les catégories
router.get("/categories", async (_req, res, next) => {
  try {
    // Requête pour sélectionner toutes les catégories
    const allCategories = await pool.query("SELECT * FROM categories");
    // Retourner les catégories sous forme de JSON
    res.json(allCategories.rows);
  } catch (err) {
    // Passer l'erreur au middleware de gestion des erreurs
    next(err);
  }
});

module.exports = router; // Exportation du routeur
