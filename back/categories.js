// categories.js

const express = require("express");
const pool = require("./db");
const router = express.Router();

// Route pour récupérer toutes les catégories
router.get("/categories", async (req, res) => {
  try {
    const allCategories = await pool.query("SELECT * FROM categories");
    res.json(allCategories.rows);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
