require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const conn = require("../db/connection");
const CustomError = require("../util/CustomError");
const userQuery = require("../queries/userQuery");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

/* ----- 화원가입 API ----- */
const join = async (email, password, nickname) => {
  try {
    // 비밀번호 암호화
    const salt = crypto.randomBytes(32).toString("base64");
    const hashPassword = crypto
      .pbkdf2Sync(password, salt, 10000, 32, "sha512")
      .toString("base64");

    // unique user id 생성
    const userId = crypto
      .pbkdf2Sync(email, salt, 10, 10, "sha512")
      .toString("base64");
    console.log(userId);

    // DB query
    const result = await conn.query(userQuery.join, [
      userId,
      email,
      hashPassword,
      nickname,
      salt,
    ]);

    // 결과 응답
    if (result[0].affectedRows > 0) {
      // jwt token 발행
      const token = jwt.sign(
        { userId: userId, email: email },
        process.env.PRIVATE_KEY,
        { expiresIn: "1d" }
      );

      return {
        isSuccess: true,
        accessToken: token,
        message: "회원가입 완료",
      };
    } else {
      throw new CustomError("회원가입 실패", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  } catch (err) {
    throw err;
  }
};

/* ----- 화원가입 - 이메일 중복 확인 API ----- */
const emailCheck = () => {
  //
};

/* ----- 로그인 API ----- */
const login = () => {
  //
};

module.exports = {
  join,
  emailCheck,
  login,
};
