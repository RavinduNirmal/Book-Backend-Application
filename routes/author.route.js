const express = require("express");
const {
    CreateAuthour,
    getAllAuthors,
    updateAuthor
} = require("../controller/authourCtrl");

const router = express.Router();
router.post("/register", CreateAuthour);
router.get("/all", getAllAuthors);
router.put("/:id", updateAuthor);


module.exports = router;