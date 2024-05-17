const express = require("express");
const BookingCtrl = require("../controller/bookCtrl");

const router = express.Router();
router.post("/create", BookingCtrl.CreateBooking);
router.get("/all", BookingCtrl.getAllBookings);
router.get("/:id", BookingCtrl.getABooking);
router.get("/:ISBNno", BookingCtrl.getBookByISBN);

module.exports = router;