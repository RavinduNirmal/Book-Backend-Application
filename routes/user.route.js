const express = require("express");
const {
    CreateUser,
    getAllUsers,
    getAUser,
    updateUser
} = require("../controller/userCtrl");

const router = express.Router();
router.post("/registeruser", CreateUser);
router.get("/all", getAllUsers);
router.get("/:id", getAUser);
router.put("/:id", updateUser);

module.exports = router;