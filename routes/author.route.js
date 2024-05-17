const express = require("express");
const {
    CreateAuthour
} = require("../controller/authourCtrl");

const router = express.Router();
router.post("/register", CreateAuthour);


module.exports = router;