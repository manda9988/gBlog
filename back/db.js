// db.js

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.PGHOST || "localhost",
  database: process.env.POSTGRES_DB || "gblog",
  port: process.env.PGPORT || 5432,
});

module.exports = pool;

// const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "gblog",
//   port: 5432,
// });

// module.exports = pool;
