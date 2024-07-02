// db.js

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.PGHOST || "localhost",
  database: process.env.POSTGRES_DB || "gblog",
  port: process.env.PGPORT || 5432,
  password: process.env.POSTGRES_PASSWORD,
});

module.exports = pool;

// Ce fichier configure une connexion à PostgreSQL en utilisant pg. 

// Il crée un pool de connexions avec des paramètres provenant des variables d'environnement ou des valeurs par défaut. 

// Le pool est exporté pour être utilisé ailleurs dans l'application.