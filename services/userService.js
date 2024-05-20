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
};

module.exports = UserService;