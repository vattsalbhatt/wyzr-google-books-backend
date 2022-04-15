const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { body, validationResult } = require("express-validator");
router.post(
  "/",
  body("email").custom(async (value) => {
    const user = await User.findOne({ email: value });
    // console.log(user);
    if (user) {
      return res.status(201).send({ msg: "user Alreay exist", result: user });
      // throw new Error("Email already exist");
    }
    return true;
  }),
  async (req, res) => {
    try {
      // const errors = validationResult(req);
      // const { email } = req.body;
      // if (!errors.isEmpty()) {
      //   //we are sending the errors in good manner
      //   let newErrors;
      //   newErrors = errors.array().map((err) => {
      //     // console.log(err);
      //     return { key: err.param, message: err.msg };
      //   });
      //   return res.status(400).send({
      //     errors: newErrors,
      //   });
      // }
      const { email } = req.body;

      const user = await User.findOne({ email });
      // console.log(user);
      if (user) {
        return res.status(201).send({ msg: "user Alreay exist", result: user });
        // throw new Error("Email already exist");
      } else {
        const user = await User.create(req.body);
        return res
          .status(201)
          .send({ msg: "user created successfully", result: user });
      }
    } catch (err) {
      return res
        .status(500)
        .send({ msg: "something went wrong", Error: err.message });
    }
  }
);

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res
      .status(201)
      .send({ msg: "user search updated successfully", result: user });
  } catch (err) {
    return res
      .status(500)
      .send({ msg: "something went wrong", Error: err.message });
  }
});

//get by id

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();

    return res
      .status(201)
      .send({ msg: "user search updated successfully", result: user });
  } catch (err) {
    return res
      .status(500)
      .send({ msg: "something went wrong", Error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate().lean().exec();
    return res.status(201).send(users);
  } catch (err) {
    return res
      .status(500)
      .send({ msg: "something went wrong", Error: err.message });
  }
});

module.exports = router;
