const express = require("express");
const router = express.Router();
const SeachTerm = require("../models/searchTerm.model");

router.post("/", async (req, res) => {
  try {
    const keyCheck = await SeachTerm.findOne({ searchKey: req.body.searchKey })
      .lean()
      .exec();

    if (keyCheck) {
      return res
        .status(200)
        .send({ msg: "KEY found already", result: keyCheck });
    } else {
      const searchKey = await SeachTerm.create(req.body);
      return res
        .status(201)
        .send({ msg: "KEY created successfully", result: searchKey });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ msg: "something went wrong", Error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const searchKeys = await SeachTerm.find();
    return res.status(201).send(searchKeys);
  } catch (err) {
    return res
      .status(500)
      .send({ msg: "something went wrong", Error: err.message });
  }
});

module.exports = router;
