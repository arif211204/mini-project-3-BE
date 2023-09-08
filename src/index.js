const express = require("express");
const { userRoutes } = require("./routes");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 2200;

app.use(express.json());
const db = require("./models");
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to Mini Project 3 API");
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
