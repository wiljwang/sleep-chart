const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// @desc    register new user
// @route   POST /api/v1/users
// @access  public
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  // simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "please enter all fields" });
  }

  // check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    const newUser = new User({
      name,
      email,
      password,
    });

    // create salt and hash
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        if (error) {
          throw error;
        }
        newUser.password = hash;
        newUser.save().then((user) => {
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
    });
  });
};
