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
    jwt.verify(accessToken, JWT_SECRET_KEY);
    return true;
  } catch (err) {
    return false;
  }
}
/* ----- refresh token 검증 ----- */
function verifyRefreshToken(refreshToken) {
  try {
    jwt.verify(refreshToken, JWT_SECRET_KEY);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
