require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const conn = require("../db/connection");
const CustomError = require("../utils/CustomError");
const userQuery = require("../queries/userQuery");
const crypto = require("crypto");
const { createAccessToken, createRefreshToken } = require("../utils/token");

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
      return {
        isSuccess: true,
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
const emailCheck = async (email) => {
  try {
    const result = await conn.query(userQuery.emailCheck, email);

    if (result[0][0].count === 0) {
      return {
        isSuccess: true,
        result: true,
        message: "사용 가능한 이메일입니다.",
      };
    } else {
      return {
        isSuccess: true,
        result: false,
        message: "이미 사용 중인 이메일입니다.",
      };
    }
  } catch (err) {
    throw err;
  }
};

/* ----- 로그인 API ----- */
const login = async (email, password) => {
  try {
    // user data 꺼내기
    const result = await conn.query(userQuery.getUser, email);
    const userData = result[0][0];

    if (!userData) {
      throw new Error();
    }

    // 요청 password 암호화
    const requestedPw = crypto
      .pbkdf2Sync(password, userData.salt, 10000, 32, "sha512")
      .toString("base64");

    // 기존 password와 대조
    if (userData.password === requestedPw) {
      // jwt token 발행
      const accessToken = createAccessToken(userData.id);
      const refreshToken = await createRefreshToken(userData.id);

      return {
        isSuccess: true,
        accessToken,
        refreshToken,
        message: "로그인 성공",
      };
    } else {
      throw new Error();
    }
  } catch (err) {
    throw new CustomError(
      "이메일 또는 비밀번호를 다시 확인해주세요.",
      StatusCodes.UNAUTHORIZED
    );
  }
};

module.exports = {
  join,
  emailCheck,
  login,
};
