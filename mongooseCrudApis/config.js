const mongoose = require("mongoose");

const mongooseConnection = async () => {
  await mongoose.connect("mongodb://0.0.0.0:27017/e-commerce");
};

module.exports = mongooseConnection();