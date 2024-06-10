// back/articles.js

const express = require("express");
const pool = require("../db");
const router = express.Router();
const { upload } = require("../index"); // Importer le middleware upload

router.get("/articles", async (_req, res, next) => {
  try {
    const allArticles = await pool.query(`
      SELECT articles.*, categories.name AS category_name
      FROM articles
      JOIN categories ON articles.category_id = categories.id
      ORDER BY articles.published_at DESC
    `);
    res.json(allArticles.rows);
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
});

router.get("/articles/latest", async (_req, res, next) => {
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
    next(err);
  }
});

router.get("/articles/:id", async (req, res, next) => {
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
    next(err);
  }
});

router.delete("/articles/:id", async (req, res, next) => {
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
    next(err);
  }
});

// Route pour l'upload des images
router.post("/upload", upload.single("image"), (req, res) => {
  if (req.file) {
    res.json({ imageUrl: req.file.path });
  } else {
    res.status(400).send("Image upload failed");
  }
});

router.post("/articles", async (req, res, next) => {
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
    next(err);
  }
});

module.exports = router;
