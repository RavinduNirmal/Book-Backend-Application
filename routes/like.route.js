const express = require("express");
const {
    likeToABook,
    getLikeCountByAuthor
} = require("../controller/likeBook");

const router = express.Router();
router.post("/create", likeToABook);
router.get("/likecount", getLikeCountByAuthor);


module.exports = router;