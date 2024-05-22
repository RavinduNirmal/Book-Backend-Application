const AuthorService = require("../services/authorService");
const UserService = require("../services/userService");
const User = require("../model/user.model");
const Author = require("../model/author.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config(); 

//Login User/Author
const Login = async (req, res) => {
  try {
    const { userType, email, password } = req.body;

    let user;
    if (userType === "user") {
      user = await User.findOne({ where: { email } });
    } else if (userType === "author") {
      user = await Author.findOne({ where: { email } });
    }

    // If user not found or password is incorrect, return a generic error message
    if (!user) {
      return res.status(400).send("Invalid login credentials");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send("Invalid login credentials");
    }

    const token = jwt.sign({ id: user.id, userType },process.env.JWT_SECRET);

    user.lastLoggedIn = new Date();
    await user.save();

    res.send({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {Login};
