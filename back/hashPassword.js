// hashPassword.js

// Importation du module bcrypt pour le hachage des mots de passe
const bcrypt = require("bcrypt");
// Nombre de tours de salage pour le hachage
const saltRounds = 10;
// Mot de passe en clair à hacher (à remplacer par le vrai mot de passe)
const plainPassword = "YourPlainPasswordHere";

// Hachage du mot de passe avec bcrypt
bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  // Gestion des erreurs éventuelles
  if (err) throw err;
  // Affichage du mot de passe haché
  console.log("Hashed Password:", hash);
});
