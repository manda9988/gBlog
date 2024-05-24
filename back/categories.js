// back/categories.js

const express = require("express");
const pool = require("./db");
const router = express.Router();

router.get("/categories", async (req, res, next) => {
  try {
    const allCategories = await pool.query("SELECT * FROM categories");
    res.json(allCategories.rows);
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
});

module.exports = router;
