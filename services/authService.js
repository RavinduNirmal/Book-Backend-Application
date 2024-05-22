const UserRepository = require("../repository/userRepository");
const AuthorRepository = require("../repository/authorRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const login = async (userType, email, password) => {
//   let user;
//   if (userType === "user") {
//     user = await UserRepository.findUserByEmail(email);
//   } else if (userType === "author") {
//     user = await AuthorRepository.findAuthorByEmail(email);
//   }

//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return { error: "Invalid login credentials" };
//   }

//   const token = jwt.sign({ id: user.id, userType }, process.env.JWT_SECRET);

//   user.lastLoggedIn = new Date();
//   await user.save();

//   const { updatedAt, createdAt, password, ...userWithoutTimestamps } = user.toJSON();

//   return { token, userType, user: userWithoutTimestamps };
// };

// module.exports = { login };

const login = async (userType, email, password) => {
    let user;
    if (userType === "user") {
      user = await UserRepository.findUserByEmail(email);
    } else if (userType === "author") {
      user = await AuthorRepository.findAuthorByEmail(email);
    }
  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return { error: "Invalid login credentials" };
    }
  
    const token = jwt.sign({ id: user.id, userType }, process.env.JWT_SECRET);
  
    user.lastLoggedIn = new Date();
    await user.save();
  
    // Destructure the user object and exclude updatedAt, createdAt and password
    const { updatedAt, createdAt, password: _, ...userWithoutTimestamps } = user.toJSON();
  
    return { token, userType, user: userWithoutTimestamps };
  };
  
  module.exports = { login };
