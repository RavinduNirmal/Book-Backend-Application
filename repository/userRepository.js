const User = require("../model/user.model");

const UserRepository = {
  findUserByEmail: async (email) => {
    return await User.findOne({ where: { email } });
  },
  createUser: async (userData) => {
    return await User.create(userData);
  },
  findAllUsers: async () => {
    return await User.findAll();
  },
};

module.exports = UserRepository;