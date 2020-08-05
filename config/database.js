const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected: ${connect.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`error: ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
