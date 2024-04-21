// back/index.js

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Accessed: Home route");
  res.send("Hello, World!");
});

app.get("/articles", async (req, res) => {
  try {
    console.log("Attempting to fetch all articles");
    const allArticles = await pool.query("SELECT * FROM articles");
    console.log("Number of articles fetched:", allArticles.rows.length);
    res.json(allArticles.rows);
  } catch (err) {
    console.error("Failed to fetch all articles:", err.message);
    res.status(500).send("Server error");
  }
});

app.get("/articles/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Attempting to fetch article with ID:", id);
  try {
    const article = await pool.query("SELECT * FROM articles WHERE id = $1", [
      id,
    ]);
    if (article.rows.length > 0) {
      console.log("Article found:", article.rows[0]);
      res.json(article.rows[0]);
    } else {
      console.log("No article found with ID:", id);
      res.status(404).send("Article not found");
    }
  } catch (err) {
    console.error("Error fetching article with ID:", id, "Error:", err.message);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}`);
});
