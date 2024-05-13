require("dotenv").config();
const conn = require("../db/connection");
const jwt = require("jsonwebtoken");
const CustomError = require("./CustomError");
const { StatusCodes } = require("http-status-codes");
const userQuery = require("../queries/userQuery");

/* ----- accress token 발행 ----- */
function createAccessToken(userId) {
  const accessToken = jwt.sign({ userId: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
  return accessToken;
}

/* ----- refresh token 발행 ----- */
async function createRefreshToken(userId) {
  try {
    // token 발행
    const refreshToken = jwt.sign({}, process.env.JWT_SECRET_KEY, {
      expiresIn: "14d",
    });

    // db에 저장
    await conn.query(userQuery.setRefresh, [refreshToken, userId]);

    return refreshToken;
  } catch (err) {
    throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "토큰 발행 실패");
  }
}

/* ----- accress token 검증 ----- */
function verifyAccessToken(accessToken) {
  try {
    jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    return true;
  } catch (err) {
    return false;
  }
}
/* ----- refresh token 검증 ----- */
async function verifyRefreshToken(refreshToken, userId) {
  try {
    // token 가져오기
    const result = await conn.query(userQuery.getRefresh, userId);
    const originRefresh = result[0][0];

    // 1. 일치하는 경우
    if (originRefresh === refreshToken) {
      try {
        // 1-1. refresh token이 만료되지 않은 경우 -> 재발급
        jwt.verify(refreshToken, process.env.JWT_SECRET_KEY); // refresh 토큰 만료 검증
        const newAccess = createAccessToken(userId); // 새로운 토큰 발행

        return {
          isSuccess: true,
          accessToken: newAccess,
          message: "access token 재발급 완료",
        };
      } catch (err) {
        // 1-2. refresh token이 만료된 경우 -> 재로그인 요청
        throw new CustomError(
          StatusCodes.UNAUTHORIZED,
          "로그인 세션이 만료되었습니다."
        );
      }
    }
    // 2. 일치하지 않는 경우
    else {
      throw new CustomError(
        StatusCodes.BAD_REQUEST,
        "refresh token이 일치하지 않습니다."
      );
    }
  } catch (err) {
    return err;
  }
}

module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
