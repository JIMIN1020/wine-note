const { body, validationResult, param, header } = require("express-validator");

/* ----- user 유효성 검증 함수 ----- */
const emailValidation = () =>
  body("email").notEmpty().isEmail().withMessage("email이 유효하지 않습니다.");

const pwValidation = () =>
  body("password")
    .notEmpty()
    .isString()
    .withMessage("password가 유효하지 않습니다.");

const nameValidation = () =>
  body("nickname")
    .notEmpty()
    .isString()
    .withMessage("nickname이 유효하지 않습니다.");

const accessValidation = () =>
  header("authorization")
    .notEmpty()
    .isString()
    .withMessage("요청 값이 유효하지 않습니다.");

const refreshValidation = () =>
  header("refresh")
    .notEmpty()
    .isString()
    .withMessage("요청 값이 유효하지 않습니다.");

/* ----- 유효성 검사 처리 함수 ----- */
const validationCheck = (req, res, next) => {
  const err = validationResult(req);

  // 유효성 검사를 통과한 경우
  if (err.isEmpty()) {
    return next();
  }
  // 통과하지 못한 경우
  else {
    return res.status(400).json({
      isSuccess: false,
      error: err.array(),
    });
  }
};

module.exports = {
  emailValidation,
  pwValidation,
  nameValidation,
  validationCheck,
  accessValidation,
  refreshValidation,
};
