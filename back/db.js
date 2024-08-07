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
