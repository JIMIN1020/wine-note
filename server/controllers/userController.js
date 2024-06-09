const { StatusCodes } = require("http-status-codes");
const userService = require("../services/userService");
const validation = require("../utils/validation");
const jwt = require("jsonwebtoken");
const { verifyRefreshToken, verifyAccessToken } = require("../utils/token");
const CustomError = require("../utils/CustomError");

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

/* ----- 토큰 재발급 API ----- */
const refresh = [
  validation.accessValidation(),
  validation.refreshValidation(),
  validation.validationCheck,
  async (req, res) => {
    try {
      const accessToken = req.headers["authorization"].split(" ")[1];
      const refreshToken = req.headers["refresh"];

      // access token decoding
      const { userId } = jwt.decode(accessToken);

      // refresh token 검증
      const result = await verifyRefreshToken(refreshToken, userId);
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
  refresh,
};
