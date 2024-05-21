const UserDTO = require("../dto/user.dto");
const UserService = require('../services/userService');

const CreateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, contactNo } = req.body;

    const user = await UserService.createUser({ firstName, lastName, email, contactNo });
    // res.status(201).json(user);
    const userDTO = new UserDTO(user);
    res.json(userDTO);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserService.getAllUsers();
    console.log("All Users fetched successfully:", allUsers);
    res.json(allUsers);
  } catch (error) {
    console.error("Error fetching all USers:", error);
    res.status(400).json({ error: error.message });
  }
};

const getAUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await UserService.getUserById(userId);
    const userDTO = new UserDTO(user);
    res.json(userDTO);
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ status: 'Error', message: error.message });
    }
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName, email, contactNo } = req.body;

  try {
    const updatedUser = await UserService.updateUser(userId, { firstName, lastName, email, contactNo });
    res.json(updatedUser);
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ status: 'Error', message: error.message });
    }
  }
}

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await UserService.deleteUser(userId);
    res.status(200).json(result);
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ status: 'Error', message: error.message });
    }
  }
};



module.exports = { CreateUser, getAllUsers, getAUser , updateUser ,deleteUser };
