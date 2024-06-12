// back/articles.js

const express = require("express");
const pool = require("../db");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog_images",
    format: async (req, file) => {
      // Récupérer l'extension du fichier
      const ext = file.mimetype.split("/")[1];
      // Limiter les formats autorisés
      if (["jpg", "jpeg", "png", "gif"].includes(ext)) {
        return ext;
      }
      return "png"; // Par défaut, utiliser png
    },
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({ storage: storage });

router.get("/articles", async (_req, res, next) => {
  try {
    const allArticles = await pool.query(`
      SELECT articles.*, categories.name AS category_name, articles.image_url
      FROM articles
      JOIN categories ON articles.category_id = categories.id
      ORDER BY articles.published_at DESC
    `);
    res.json(allArticles.rows);
  } catch (err) {
    next(err);
  }
});

router.get("/articles/latest", async (_req, res, next) => {
  try {
    const latestArticles = await pool.query(`
      SELECT articles.*, categories.name AS category_name, articles.image_url
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
      SELECT a.id, a.title, a.content, a.category_id, a.image_url, a.published_at, c.name as category_name
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

router.post("/upload", upload.single("image"), (req, res) => {
  if (req.file) {
    res.json({ imageUrl: req.file.path });
  } else {
    res.status(400).send("Image upload failed");
  }
});

router.post("/articles", async (req, res, next) => {
  try {
    const { title, category_id, content, image_url } = req.body;
    const insertQuery = `
      INSERT INTO articles (title, category_id, content, image_url, published_at) 
      VALUES ($1, $2, $3, $4, NOW()) 
      RETURNING *`;
    const newArticle = await pool.query(insertQuery, [
      title,
      category_id,
      content,
      image_url,
    ]);
    res.json(newArticle.rows[0]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
