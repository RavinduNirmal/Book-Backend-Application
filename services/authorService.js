const AuthorRepository = require('../repository/authorRepository');

const AuthorService = {
    CreateAuthor: async (authorData) => {
    const { email } = authorData;
    
    // Check if the email already exists
    const existingAuthor = await AuthorRepository.findUserByEmail(email);
    if (existingAuthor) {
      throw new Error('Author with this email already exists');
    }
    
    // Create the Author
    return await AuthorRepository.CreateAuthor(authorData);
  },
};

module.exports = AuthorService;