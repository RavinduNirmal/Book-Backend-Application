const express = require("express");
const {
    CreateUser,
    getAllUsers,
    getAUser
} = require("../controller/userCtrl");

const router = express.Router();
router.post("/registeruser", CreateUser);
router.get("/all", getAllUsers);
router.get("/:id", getAUser);


module.exports = router;