const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { login } = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);

// Protected API
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed",
    user: req.user,
  });
});

module.exports = router;
