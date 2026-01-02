const authService = require("../services/auth.service");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await authService.login(email, password);

    res.json({
      success: true,
      message: "Login successful",
      data,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
