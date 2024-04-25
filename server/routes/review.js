const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.post("/", reviewController.review); // 리뷰 작성 API
router.delete("/", reviewController.deleteReview); // 리뷰 삭제 API

module.exports = router;
