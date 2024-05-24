// back/index.js

const express = require("express");
const cors = require("cors");
const authRouter = require("./auth");
const articlesRouter = require("./articles");
const categoriesRouter = require("./categories");
const errorHandler = require("./middleware/errorHandler"); // Importer le middleware de gestion des erreurs

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
app.use(categoriesRouter); // Utiliser le router des catégories

// Utiliser le middleware de gestion des erreurs
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
