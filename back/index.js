// back/index.js

const express = require("express"); // Framework web pour Node.js
const cors = require("cors"); // Middleware pour gérer les CORS
const compression = require("compression"); // Middleware pour compresser les réponses

const { router: authRouter, authenticateJWT } = require("./routes/auth"); // Routes et middleware d'authentification
const articlesRouter = require("./routes/articles"); // Routes pour les articles
const categoriesRouter = require("./routes/categories");
const errorHandler = require("./middleware/errorHandler"); // Middleware de gestion des erreurs

require("dotenv").config(); // Charger les variables d'environnement depuis un fichier .env

const app = express();
const port = process.env.PORT || 3000; // Définir le port d'écoute

const corsOptions = {
  origin: ["https://gblog-bice.vercel.app", "http://localhost:5173"], // Autoriser ces origines
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Middleware CORS avec les options définies
app.use(express.json()); // Middleware pour parser le JSON des requêtes
app.use(compression()); // Middleware de compression

app.use(authRouter); // Utiliser les routes d'authentification
app.use(articlesRouter); // Utiliser les routes des articles
app.use(categoriesRouter);

// Middleware authenticateJWT pour protéger les routes /publish et /account
app.use("/publish", authenticateJWT);
app.use("/account", authenticateJWT);

// Middleware de gestion des erreurs
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // Démarrer le serveur
});
