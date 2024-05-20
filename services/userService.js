const UserRepository = require('../repository/userRepository');

const UserService = {
  createUser: async (userData) => {
    const { email } = userData;
    
    // Check if the email already exists
    const existingUser = await UserRepository.findUserByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    
    // Create the user
    return await UserRepository.createUser(userData);
  },

  getAllUsers: async () => {
    return await UserRepository.findAllUsers();
  },
  updateUser: async (userId, userData) => {
    const user = await UserRepository.findUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    user.firstName = userData.firstName || user.firstName;
    user.lastName = userData.lastName || user.lastName;
    user.email = userData.email || user.email;
    user.contactNo = userData.contactNo || user.contactNo;

    return await UserRepository.updateUser(user);
  },
};

module.exports = UserService;