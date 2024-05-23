// auth.js

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("./db");
require("dotenv").config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY; // Utiliser la clé secrète du fichier .env

// Route de login pour générer le token JWT
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(`Login attempt with email: ${email}`);
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  if (user.rows.length > 0) {
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (validPassword) {
      const token = jwt.sign({ userId: user.rows[0].id }, SECRET_KEY, {
        expiresIn: "1h",
      });
      console.log(`Login successful for email: ${email}`);
      res.json({ token });
    } else {
      console.log(`Invalid password for email: ${email}`);
      res.status(401).send("Invalid credentials");
    }
  } else {
    console.log(`User not found for email: ${email}`);
    res.status(401).send("Invalid credentials");
  }
});

module.exports = router;
