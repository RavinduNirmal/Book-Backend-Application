const Author = require('../model/author.model');

const CreateAuthour = async (req, res) => {
    try {
      const { firstName, lastName, email, contactNo } = req.body;
      const authour = await Author.create({ firstName, lastName, email, contactNo });
      res.status(201).json(authour);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  ;
  module.exports = {CreateAuthour}
