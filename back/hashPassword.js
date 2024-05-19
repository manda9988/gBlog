const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainPassword = "AdminPass123!";

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Hashed Password:", hash);
});
