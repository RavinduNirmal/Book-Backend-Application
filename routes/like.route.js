const express = require("express");
const {
    likeToABook,
} = require("../controller/likeCount");

const router = express.Router();
router.post("/create", likeToABook);


module.exports = router;