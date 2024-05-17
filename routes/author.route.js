const express = require("express");
const {
    CreateAuthour,
    getAllAuthors
} = require("../controller/authourCtrl");

const router = express.Router();
router.post("/register", CreateAuthour);
router.get("/all", getAllAuthors);


module.exports = router;