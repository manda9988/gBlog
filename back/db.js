const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "gblog",
  // Pas besoin de spécifier le mot de passe si votre configuration PostgreSQL ne l'exige pas
  port: 5432,
});

module.exports = pool;
