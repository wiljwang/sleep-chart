const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { getData, addDatum, deleteDatum } = require("../../controllers/data");

router.route("/").get(getData);

router.route("/", auth).post(addDatum);

router.route("/:id", auth).delete(deleteDatum);

module.exports = router;
