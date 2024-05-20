const Author = require("../model/author.model");

const AuthorRepository = {
  findUserByEmail: async (email) => {
    return await Author.findOne({ where: { email } });
  },
  CreateAuthor: async (authorData) => {
    return await Author.create(authorData);
  },
  findAllAuthors: async () => {
    return await Author.findAll();
  },
};

module.exports = AuthorRepository;