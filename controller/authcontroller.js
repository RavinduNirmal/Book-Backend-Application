const AuthService = require("../services/authService");

//Login User/Author
const Login = async (req, res) => {
  try {
    const { userType, email, password } = req.body;
    const result = await AuthService.login(userType, email, password);

    if (result.error) {
      return res.status(400).send(result.error);
    }
    res.send(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { Login };
