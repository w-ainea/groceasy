const express = require("express");
const { signIn, signUp } = require("../actions/auth");

const router = express.Router();

// signup a user
router.post("/signup", async (req, res) => {
  try {
    const response = await signUp(req.body);
    res.json({ response });
  } catch (error) {
    res.status(400).json({ error, message: error.detail });
  }
});

router.post("/signin", async (req, res) => {
  const response = await signIn(req.body);
  res.json({ response });
});

module.exports = router;
