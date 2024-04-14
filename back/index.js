// back / index.js;

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

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
