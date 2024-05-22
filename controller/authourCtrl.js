const AuthorDTO = require("../dto/author.dto");
const AuthorService = require('../services/authorService');

const CreateAuthour = async (req, res) => {
  try {
    const { firstName, lastName, email, contactNo,password } = req.body;

    const author = await AuthorService.CreateAuthor({ firstName, lastName, email, contactNo, password });
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await AuthorService.getAllAuthors();
    console.log("All Authors fetched successfully:", allAuthors);
    res.json(allAuthors);
  } catch (error) {
    console.error("Error fetching all authors:", error);
    res.status(400).json({ error: error.message });
  }
};

const updateAuthor = async (req, res) => {
  const authorId = req.params.id;
  const { firstName, lastName, email, contactNo } = req.body;

  try {
    const updatedAuthor = await AuthorService.updateAuthor(authorId, { firstName, lastName, email, contactNo });
    res.json(updatedAuthor);
  } catch (error) {
    if (error.message === 'Author not found') {
      res.status(404).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ status: 'Error', message: error.message });
    }
  }
};

const getAnAuthor = async (req, res) => {
  const authorId = req.params.id;

  try {
    const author = await AuthorService.getAuthorById(authorId);
    const authorDTO = new AuthorDTO(author);
    res.json(authorDTO);
  } catch (error) {
    if (error.message === 'Author not found') {
      res.status(404).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ status: 'Error', message: error.message });
    }
  }
};

const deleteAuthor = async (req, res) => {
  const authorId = req.params.id;

  try {
    const result = await AuthorService.deleteAuthor(authorId);
    res.status(200).json(result);
  } catch (error) {
    if (error.message === 'Author not found') {
      res.status(404).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ status: 'Error', message: error.message });
    }
  }
};

module.exports = {
  CreateAuthour,
  getAllAuthors,
  updateAuthor,
  getAnAuthor,
  deleteAuthor,
};
