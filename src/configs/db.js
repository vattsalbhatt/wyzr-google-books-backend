const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://vattsalbhatt:vattsal123@cluster0.fc9s9.mongodb.net/wyzrBooks"
  );
};

module.exports = connect;
