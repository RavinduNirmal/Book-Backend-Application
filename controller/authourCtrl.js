const Author = require('../model/author.model');

const CreateAuthour = async (req, res) => {
    try {
      const { firstName, lastName, email, contactNo } = req.body;

       // Check if the email already exists
    const existingAuthor = await Author.findOne({ where: { email } });
    if (existingAuthor) {
      return res.status(400).json({ error: 'Author with this email already exists' });
    }
      const authour = await Author.create({ firstName, lastName, email, contactNo });
      res.status(201).json(authour);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const getAllAuthors = async (req, res) => {
    try {
      const allAuthor = await Author.findAll();
      console.log("All Authors fetched successfully:", allAuthor);
      res.json(allAuthor);
    } catch (error) {
      console.error("Error fetching all users:", error);
      res.status(400).json(error);
    }
  };
  
  module.exports = {CreateAuthour,getAllAuthors}
