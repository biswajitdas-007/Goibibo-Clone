const express = require("express");

const mongoose = require("mongoose");

const app = express();
const connect = () => {
  return (
    mongoose
      // .connect("mongodb://127.0.0.1:27017/goibibo", {
      .connect(
        "mongodb+srv://goibibo:goibibo@cluster0.ha777.mongodb.net/goibibo?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        }
      )
      .then(() => {
        console.log(`connection successful`);
      })
      .catch((err) => {
        console.log(err);
      })
  );
};
module.exports = connect;
