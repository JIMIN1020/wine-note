const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.get("/", reviewController.getAllReviews); // 전체 리뷰 조회 API
router.get("/:reviewId", reviewController.getReview); // 리뷰 상세 조회 API
router.post("/", reviewController.review); // 리뷰 작성 API
router.delete("/:wineId", reviewController.deleteReview); // 리뷰 삭제 API

module.exports = router;
