const express = require("express");
const {
    CreateAuthour,
    getAllAuthors,
    updateAuthor,
    getAnAuthor
} = require("../controller/authourCtrl");

const router = express.Router();
router.post("/register", CreateAuthour);
router.get("/all", getAllAuthors);
router.put("/:id", updateAuthor);
router.get("/:id", getAnAuthor);

module.exports = router;