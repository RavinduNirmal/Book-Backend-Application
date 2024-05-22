const UserRepository = require("../repository/userRepository");
const bcrypt = require("bcrypt");

const UserService = {
  createUser: async (userData) => {
    const { email, password } = userData;

    // Check if the email already exists
    const existingUser = await UserRepository.findUserByEmail(email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }
    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    userData.password = hashedPassword;
    // Create the user
    return await UserRepository.createUser(userData);
  },
  getAllUsers: async () => {
    return await UserRepository.findAllUsers();
  },
  updateUser: async (userId, userData) => {
    const user = await UserRepository.findUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    user.firstName = userData.firstName || user.firstName;
    user.lastName = userData.lastName || user.lastName;
    user.email = userData.email || user.email;
    user.contactNo = userData.contactNo || user.contactNo;

    return await UserRepository.updateUser(user);
  },
  deleteUser: async (userId) => {
    const user = await UserRepository.findUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    await UserRepository.deleteUser(user);
    return { message: "User deleted successfully" };
  },
  getUserById: async (userId) => {
    const user = await UserRepository.findUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  },
};

module.exports = UserService;
