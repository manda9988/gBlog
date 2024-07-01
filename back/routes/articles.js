// back/articles.js

// Importation des modules nécessaires
const express = require("express"); // Framework web pour Node.js
const pool = require("../db"); // Pool de connexions pour PostgreSQL
const router = express.Router(); // Routeur pour gérer les routes
const cloudinary = require("cloudinary").v2; // Gestion des images dans le cloud
const multer = require("multer"); // Middleware pour gérer les uploads de fichiers
const { CloudinaryStorage } = require("multer-storage-cloudinary"); // Adaptateur Multer pour Cloudinary

// Configuration de Cloudinary avec les variables d'environnement
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configuration de Multer pour le stockage des images sur Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog_images", // Dossier sur Cloudinary

    format: async (_req, file) => {
      // Récupérer l'extension du fichier
      const ext = file.mimetype.split("/")[1];
      // Limiter les formats autorisés
      if (["jpg", "jpeg", "png", "gif"].includes(ext)) {
        return ext;
      }
      return "png"; // Par défaut, utiliser png
    },
    public_id: (_req, file) => file.originalname, // Utiliser le nom original du fichier
  },
});

// Initialisation de Multer avec le stockage configuré

const upload = multer({ storage: storage });

// Route pour récupérer tous les articles

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

// Route pour récupérer les six derniers articles publiés

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

// Route pour récupérer un article par ID

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

// Route pour supprimer un article par ID

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

// Route pour uploader une image sur Cloudinary

router.post("/upload", upload.single("image"), (req, res) => {
  if (req.file) {
    res.json({ imageUrl: req.file.path });
  } else {
    res.status(400).send("Image upload failed");
  }
});

// Route pour créer un nouvel article

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

module.exports = router; // Exportation du routeur


