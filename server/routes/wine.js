const express = require("express");
const router = express.Router();
const wineController = require("../controllers/wineController");

router.get("/", wineController.getAllReviews); // 전체 기록 조회 API
router.get("/:reviewId", wineController.getReview); // 와인 기록 상세 조회 API
router.post("/", wineController.review); // 와인 기록 작성 API
router.delete("/:wineId", wineController.deleteReview); // 와인 기록 삭제 API

module.exports = router;
