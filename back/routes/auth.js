// back/auth.js

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("../db");
require("dotenv").config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length > 0) {
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );
      if (validPassword) {
        const token = jwt.sign({ userId: user.rows[0].id }, SECRET_KEY, {
          expiresIn: "1h",
        });
        res.json({ token });
      } else {
        res.status(401).send("Invalid credentials");
      }
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
});

module.exports = router;
