const express = require("express");
const app = express();
const port = 3000;
const pool = require("./db"); // Importez la connexion à la base de données

app.use(express.json()); // Pour parser les corps de requêtes en JSON

// Route de test pour vérifier que le serveur fonctionne
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Nouvelle route pour récupérer tous les articles
app.get("/articles", async (req, res) => {
  try {
    const allArticles = await pool.query("SELECT * FROM articles");
    res.json(allArticles.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
