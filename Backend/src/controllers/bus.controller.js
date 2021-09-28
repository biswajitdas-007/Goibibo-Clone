const express = require("express");
const busRouter = express.Router();

const Bus = require("../models/bus.model.js");

busRouter.get("/", async (req, res) => {
  console.log("sending bus data");
  const temp = await Bus.find().lean().exec();
  res.send({ data: temp });
});
module.exports = busRouter;
