// articles.js

const express = require("express");
const pool = require("./db");
const router = express.Router();

// Route pour récupérer tous les articles avec leurs catégories, les plus récents en premier
router.get("/articles", async (_req, res) => {
  try {
    const allArticles = await pool.query(`
      SELECT articles.*, categories.name AS category_name
      FROM articles
      JOIN categories ON articles.category_id = categories.id
      ORDER BY articles.published_at DESC
    `);
    res.json(allArticles.rows);
  } catch (err) {
    console.error("Error fetching all articles:", err);
    res.status(500).send("Server error");
  }
});

// Route pour récupérer les 6 derniers articles
router.get("/articles/latest", async (req, res) => {
  try {
    const latestArticles = await pool.query(`
      SELECT articles.*, categories.name AS category_name
      FROM articles
      JOIN categories ON articles.category_id = categories.id
      ORDER BY articles.published_at DESC
      LIMIT 6
    `);
    res.json(latestArticles.rows);
  } catch (err) {
    console.error("Error fetching latest articles:", err);
    res.status(500).send("Server error");
  }
});

// Route pour récupérer un article spécifique par son ID avec sa catégorie
router.get("/articles/:id", async (req, res) => {
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

// Route DELETE pour supprimer un article
router.delete("/articles/:id", async (req, res) => {
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

// Route pour ajouter un nouvel article
router.post("/articles", async (req, res) => {
  try {
    const { title, category_id, content } = req.body;
    const insertQuery = `
      INSERT INTO articles (title, category_id, content, published_at)
      VALUES ($1, $2, $3, NOW())
      RETURNING *`;
    const newArticle = await pool.query(insertQuery, [
      title,
      category_id,
      content,
    ]);
    res.json(newArticle.rows[0]);
  } catch (err) {
    console.error("Error creating new article:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
