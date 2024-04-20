const { StatusCodes } = require("http-status-codes");
const userService = require("../services/userService");
const validation = require("../util/validation");

/* ----- 화원가입 API ----- */
const join = [
  validation.emailValidation(),
  validation.pwValidation(),
  validation.nameValidation(),
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
const emailCheck = [
  validation.emailValidation(),
  validation.validationCheck,
  async (req, res) => {
    const { email } = req.body;

    try {
      const result = await userService.emailCheck(email);
      res.status(StatusCodes.OK).json(result);
    } catch (err) {
      res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        isSuccess: false,
        message: err.message,
      });
    }
  },
];

/* ----- 로그인 API ----- */
const login = [
  validation.emailValidation(),
  validation.pwValidation(),
  validation.validationCheck,
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const result = await userService.login(email, password);
      res.status(StatusCodes.OK).json(result);
    } catch (err) {
      res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        isSuccess: false,
        message: err.message,
      });
    }
  },
];

module.exports = {
  join,
  emailCheck,
  login,
};
