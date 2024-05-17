const User = require("../model/user.model");
const UserDTO = require("../dto/user.dto");

const CreateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, contactNo } = req.body;
    const user = await User.create({ firstName, lastName, email, contactNo });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    console.log("All Users fetched successfully:", allUsers);
    res.json(allUsers);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(400).json(error);
  }
};

const getAUser = async (req, res) => {
  let userId = req.params.id;
  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const userDTO = new UserDTO(user);
    res.json(userDTO);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error" });
  }
};

module.exports = { CreateUser, getAllUsers, getAUser };
