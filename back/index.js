// back/index.js

const express = require("express");
const cors = require("cors");
const compression = require("compression"); // Importer le module de compression
const cloudinary = require("cloudinary").v2; // Importer Cloudinary
const multer = require("multer"); // Importer Multer
const { CloudinaryStorage } = require("multer-storage-cloudinary"); // Importer le stockage Cloudinary

const { router: authRouter, authenticateJWT } = require("./routes/auth");
const articlesRouter = require("./routes/articles");
const categoriesRouter = require("./routes/categories");
const errorHandler = require("./middleware/errorHandler");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Configurer Cloudinary avec les variables d'environnement
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configurer Multer pour utiliser Cloudinary comme stockage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog_images", // Dossier dans Cloudinary
    format: async (req, file) => "png", // Format de fichier (par exemple, png)
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({ storage: storage }); // Créer un middleware Multer avec le stockage Cloudinary

const corsOptions = {
  origin: ["https://gblog-bice.vercel.app", "http://localhost:5173"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(compression()); // Utiliser le middleware de compression

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
