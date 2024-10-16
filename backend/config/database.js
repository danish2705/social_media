const mongoose = require("mongoose");

const database = mongoose
  .connect(process.env.DATABASE_URL)
  .then((con) => {
    console.log(`Connected to mongoDB at ${con.connection.host}`);
  })
  .catch((err) => {
    console.log("Database connection error", err);
  });

module.exports = database;
