require("dotenv").config();
const jwt = require("jsonwebtoken");

/* ----- accress token 발행 ----- */
function createAccessToken(userId) {
  const accessToken = jwt.sign({ userId: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
  return accessToken;
}

/* ----- refresh token 발행 ----- */
function createRefreshToken() {
  const refreshToken = jwt.sign({}, process.env.JWT_SECRET_KEY, {
    expiresIn: "14d",
  });
  return refreshToken;
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
