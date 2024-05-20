const User = require("../model/user.model");
const UserDTO = require("../dto/user.dto");
const UserService = require('../services/userService');

const CreateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, contactNo } = req.body;

    const user = await UserService.createUser({ firstName, lastName, email, contactNo });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const getAllUsers = async (req, res) => {
//   try {
//     const allUsers = await User.findAll();
//     console.log("All Users fetched successfully:", allUsers);
//     res.json(allUsers);
//   } catch (error) {
//     console.error("Error fetching all users:", error);
//     res.status(400).json(error);
//   }
// };

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

const updateUser = async (req, res) => {
  let userId = req.params.id;
  const { firstName, lastName, email, contactNo } = req.body; 

  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.contactNo = contactNo || user.contactNo;   

    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", message: error.message });
  }
};

const deleteUser = async (req, res) => {
  let userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user
    await user.destroy();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", message: error.message });
  }
};



module.exports = { CreateUser, getAllUsers, getAUser , updateUser ,deleteUser };
