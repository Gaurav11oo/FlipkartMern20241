const mongoose = require("mongoose");
// const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URI, {
      dbNAME: "FlipkartDatabase",
    })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log(` Connected : ${err}`);
    });
};

module.exports = connectDatabase;
