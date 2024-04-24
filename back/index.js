// back/index.js

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/articles", async (req, res) => {
  try {
    const allArticles = await pool.query("SELECT * FROM articles");
    res.json(allArticles.rows);
  } catch (err) {
    console.error("Error fetching all articles:", err);
    res.status(500).send("Server error");
  }
});

app.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await pool.query("SELECT * FROM articles WHERE id = $1", [
      id,
    ]);
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

app.listen(port);
