const express = require("express");
const connect = require("./src/configs/db");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
const PORT = process.env.PORT || 5656;
const userController = require("./src/controllers/user.controller");
const seachTermController = require("./src/controllers/searchTerm.controller");

app.use("/users", userController);
app.use("/searchterms", seachTermController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`PORT is listening on ${PORT} `);
  } catch (err) {
    console.log("err", err);
  }
});
