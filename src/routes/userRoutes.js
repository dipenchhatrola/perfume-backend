const express = require("express");
const auth = require("../middlewares/authMiddleware");
const { register, login, getProfile, getUsers, updateUser, deleteUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/me", auth, getProfile);
router.get("/", auth, getUsers);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

module.exports = router;
