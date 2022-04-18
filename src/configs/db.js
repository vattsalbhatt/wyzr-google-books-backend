const mongoose = require("mongoose");

const connect = () => {
  //USed MongoDB Atlas DB link
  return mongoose.connect(
    "mongodb+srv://vattsalbhatt:vattsal123@cluster0.fc9s9.mongodb.net/wyzrBooks"
  );
};

module.exports = connect;
