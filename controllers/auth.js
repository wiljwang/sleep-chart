const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// @desc    auth user
// @route   POST /api/v1/auth
// @access  public
exports.authUser = async (req, res, next) => {
  const { email, password } = req.body;

  // simple validation
  if (!email || !password) {
    return res.status(400).json({ message: "please enter all fields" });
  }

  // check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "user does not exist" });
    }

    // validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ message: "invalid credentials" });
      }
      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (error, token) => {
          if (error) {
            throw error;
          }
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
};

// @desc    get user data
// @route   GET /api/v1/auth/user
// @access  private
exports.getUser = async (req, res, next) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
};
