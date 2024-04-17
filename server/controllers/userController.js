const { StatusCodes } = require("http-status-codes");
const userService = require("../services/userService");
const validation = require("../util/validation");

/* ----- 화원가입 API ----- */
const join = [
  validation.emailValidation(),
  validation.pwValidation(),
  validation.validationCheck,
  async (req, res) => {
    const { email, password, nickname } = req.body;

    try {
      const result = await userService.join(email, password, nickname);
      res.status(StatusCodes.CREATED).json(result);
    } catch (err) {
      res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        isSuccess: false,
        message: err.message,
      });
    }
  },
];

/* ----- 화원가입 - 이메일 중복 확인 API ----- */
const emailCheck = (req, res) => {
  //
};

/* ----- 로그인 API ----- */
const login = (req, res) => {
  //
};

module.exports = {
  join,
  emailCheck,
  login,
};
