const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { authUser, getUser } = require("../../controllers/auth");

router.route("/").post(authUser);

router.route("/user", auth).get(getUser);

module.exports = router;
