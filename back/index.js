// back/index.js

const express = require("express");
const cors = require("cors");
const authRouter = require("./auth");
const articlesRouter = require("./articles");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Configuration CORS pour autoriser des domaines spécifiques et supporter les anciens navigateurs
const corsOptions = {
  origin: ["https://gblog-bice.vercel.app", "http://localhost:5173"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(authRouter); // Utiliser le router d'authentification
app.use(articlesRouter); // Utiliser le router des articles

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
