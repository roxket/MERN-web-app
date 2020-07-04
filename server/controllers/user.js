const bcrypt = require("bcrypt-node");
const user = require("../models/user");

function signUp(req, res) {
  console.log("Endpoint de signUp");
}

module.exports = {
  signUp,
};
