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

  getAllAuthors: async () => {
    return await AuthorRepository.findAllAuthors();
  },

  updateAuthor: async (authorId, authorData) => {
    const author = await AuthorRepository.findAuthorById(authorId);
    if (!author) {
      throw new Error('Author not found');
    }

    author.firstName = authorData.firstName || author.firstName;
    author.lastName = authorData.lastName || author.lastName;
    author.email = authorData.email || author.email;
    author.contactNo = authorData.contactNo || author.contactNo;

    return await AuthorRepository.updateAuthor(author);
  },

  deleteAuthor: async (authorId) => {
    const author = await AuthorRepository.findAuthorById(authorId);
    if (!author) {
      throw new Error('Author not found');
    }

    await AuthorRepository.deleteAuthor(author);
    return { message: 'Author deleted successfully' };
  },

  getAuthorById: async (authorId) => {
    const author = await AuthorRepository.findAuthorById(authorId);
    if (!author) {
      throw new Error('Author not found');
    }
    return author;
  },
};

module.exports = AuthorService;