// back/index.js

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const pool = require("./db");

app.use(cors());
app.use(express.json());

// Route pour récupérer tous les articles avec leurs catégories
app.get("/articles", async (req, res) => {
  try {
    const allArticles = await pool.query(`
      SELECT articles.*, categories.name AS category_name
      FROM articles
      JOIN categories ON articles.category_id = categories.id
    `);
    res.json(allArticles.rows);
  } catch (err) {
    console.error("Error fetching all articles:", err);
    res.status(500).send("Server error");
  }
});

// Route pour récupérer un article spécifique par son ID avec sa catégorie
app.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const articleQuery = `
      SELECT a.id, a.title, a.content, a.category_id, a.published_at, c.name as category_name
      FROM articles a
      JOIN categories c ON a.category_id = c.id
      WHERE a.id = $1`;
    const article = await pool.query(articleQuery, [id]);
    if (article.rows.length > 0) {
      res.json(article.rows[0]);
    } else {
      res.status(404).send("Article not found");
    }
  } catch (err) {
    console.error("Error fetching article by ID:", err);
    res.status(500).send("Server error");
  }
});

// Route pour récupérer toutes les catégories
app.get("/categories", async (req, res) => {
  try {
    const allCategories = await pool.query("SELECT * FROM categories");
    res.json(allCategories.rows);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Server error");
  }
});

// Nouvelle route DELETE pour supprimer un article
app.delete("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQuery = "DELETE FROM articles WHERE id = $1";
    const result = await pool.query(deleteQuery, [id]);
    if (result.rowCount > 0) {
      res.json({ success: true, message: "Article deleted successfully." });
    } else {
      res.status(404).send({ success: false, message: "Article not found." });
    }
  } catch (err) {
    console.error("Error deleting article:", err);
    res.status(500).send("Server error");
  }
});

app.listen(port);
