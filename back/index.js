// back/index.js

const express = require("express");
const cors = require("cors");
const { router: authRouter, authenticateJWT } = require("./routes/auth");
const articlesRouter = require("./routes/articles");
const categoriesRouter = require("./routes/categories");
const errorHandler = require("./middleware/errorHandler");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: ["https://gblog-bice.vercel.app", "http://localhost:5173"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(authRouter);
app.use(articlesRouter);
app.use(categoriesRouter);

// Utiliser le middleware authenticateJWT pour protéger les routes /publish et /account
app.use("/publish", authenticateJWT);
app.use("/account", authenticateJWT);

// Utiliser le middleware de gestion des erreurs
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
