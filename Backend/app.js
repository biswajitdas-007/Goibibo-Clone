const express = require("express");
const path = require("path");
const app = express();
const connect = require("./src/db/conn");
var cors = require("cors");

const busRouter = require("./src/controllers/bus.controller");

const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use("/bus", busRouter);

app.get("/", async (req, res) => {
  return res.status(201).send({ data: "Hello there," });
});

app.listen(port, async () => {
  await connect();
  console.log(`server is running at port no ${port}`);
});
