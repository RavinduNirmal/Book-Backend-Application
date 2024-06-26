const User = require("../model/user.model");

const UserRepository = {
  findUserByEmail: async (email) => {
    return await User.findOne({ where: { email } });
  },
  createUser: async (userData) => {
    return await User.create(userData,{ attributes: { exclude: ['updatedAt','createdAt'] }});
  },
  findAllUsers: async () => {
    return await User.findAll({ attributes: { exclude: ['updatedAt','createdAt'] }});
  },
  findUserById: async (userId) => {
    return await User.findOne({ where: { id: userId } });
  },
  updateUser: async (user) => {
    return await user.save();
  },
  deleteUser: async (user) => {
    return await user.destroy();
  },
};

module.exports = UserRepository;