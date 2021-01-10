const db = require("../../db-config");
const bcrypt = require("bcrypt");

// validate user credentials
const validUser = (email, password) => {
  const validMail = email.length !== 0 && email.trim(""),
    validPassword = password.length >= 6;

  return validMail && validPassword;
};

// sign up
const signUp = (creds) => {
  const { firstname, lastname, email, password } = creds;

  //

  // add user to database
  return db("users").returning("*").insert({
    email,
    password: hashedPass,
    firstname,
    lastname,
  });
};

// sign in
const signIn = (creds) => {
  const { email, password } = creds;

  return db("users").returning("*").insert({
    email,
    password,
  });
};

module.exports = { signIn, signUp };
