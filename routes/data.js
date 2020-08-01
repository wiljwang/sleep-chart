const express = require("express");
const router = express.Router();
const { getData, addDatum, deleteDatum } = require("../controllers/data");

router.route("/").get(getData).post(addDatum);

router.route("/:id").delete(deleteDatum);

module.exports = router;
