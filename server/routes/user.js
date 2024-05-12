const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/join", userController.join); // 회원가입 API
router.post("/join/emailCheck", userController.emailCheck); // 이메일 중복 확인 API
router.post("/login", userController.login); // 로그인 API
router.get("/refresh", userController.refresh); // 토큰 재발급 API

module.exports = router;
