const bcrypt = require("bcryptjs");
//const users = require("../models/user.model");
const { generateToken } = require("../utils/jwt");

exports.login = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateToken({ id: user.id, email: user.email });

  return { token };
};
