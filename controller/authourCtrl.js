const Author = require("../model/author.model");
const AuthorDTO = require("../dto/author.dto");
const AuthorService = require('../services/authorService');

const CreateAuthour = async (req, res) => {
  try {
    const { firstName, lastName, email, contactNo } = req.body;

    const author = await AuthorService.CreateAuthor({ firstName, lastName, email, contactNo });
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
  let authorId = req.params.id;
  const { firstName, lastName, email, contactNo } = req.body;

  try {
    const author = await Author.findOne({ where: { id: authorId } });
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    author.firstName = firstName || author.firstName;
    author.lastName = lastName || author.lastName;
    author.email = email || author.email;
    author.contactNo = contactNo || author.contactNo;

    await author.save();
    res.json(author);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", message: error.message });
  }
};

const getAnAuthor = async (req, res) => {
  let authorId = req.params.id;
  try {
    const author = await Author.findOne({ where: { id: authorId } });
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    const authorDTO = new AuthorDTO(author);
    res.json(authorDTO);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error" });
  }
};

const deleteAuthor = async (req, res) => {
  let authorId = req.params.id;

  try {
    const author = await Author.findByPk(authorId);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    // Delete the user
    await author.destroy();

    res.status(200).json({ message: "Author deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", message: error.message });
  }
};

module.exports = {
  CreateAuthour,
  getAllAuthors,
  updateAuthor,
  getAnAuthor,
  deleteAuthor,
};
