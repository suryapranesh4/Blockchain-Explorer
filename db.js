const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
  let connectionString = process.env.MONGOOSE_CONNECTION_STRING;

  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(
      () => {
        console.log("Mongoose connected successfully to Mongo DB");
      },
      (error) => {
        console.log("Mongoose could not connected to database: " + error);
      }
    );
}

module.exports = connectDB;
