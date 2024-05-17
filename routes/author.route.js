const express = require("express");
const {
    CreateAuthour,
    getAllAuthors,
    updateAuthor,
    getAnAuthor,
    deleteAuthor
} = require("../controller/authourCtrl");

const router = express.Router();
router.post("/register", CreateAuthour);
router.get("/all", getAllAuthors);
router.put("/:id", updateAuthor);
router.get("/:id", getAnAuthor);
router.delete("/:id", deleteAuthor);

module.exports = router;