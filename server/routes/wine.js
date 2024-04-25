const express = require("express");
const router = express.Router();
const wineController = require("../controllers/wineController");

router.get("/", wineController.getAllReviews); // 전체 리뷰 조회 API
router.get("/:reviewId", wineController.getReview); // 리뷰 상세 조회 API
router.post("/", wineController.review); // 리뷰 작성 API
router.delete("/:wineId", wineController.deleteReview); // 리뷰 삭제 API

module.exports = router;
