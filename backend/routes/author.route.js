const express = require("express");
const {
    CreateUser
} = require("../controller/userCtrl");

const router = express.Router();
router.post("/register", CreateUser);


module.exports = router;