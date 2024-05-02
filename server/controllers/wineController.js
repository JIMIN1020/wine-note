const { StatusCodes } = require("http-status-codes");
const wineService = require("../services/wineService");
const wineQuery = require("../queries/wineQuery");

/* ----- 리뷰 전체 조회 API ----- */
const getAllReviews = async (req, res) => {
  const { limit, page } = req.query;
  const { category } = req.query;

  const sql = wineQuery.getAllReviews;

  if (category) {
    sql += ` AND wine.country = ${category}`;
  }
  sql = +` LIMIT ${(+page - 1) * +limit} ${+limit}`;

  try {
    const result = await wineService.getAllReviews(sql, "w+trJbtUGHf9ag==");
    res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

/* ----- 리뷰 상세 조회 API ----- */
const getReview = async (req, res) => {
  const { reviewId } = req.params;
  try {
    const result = await wineService.getReview(+reviewId);
    res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

/* ----- 리뷰 작성 API ----- */
const review = async (req, res) => {
  const { wine, review } = req.body;

  try {
    const result = await wineService.review(wine, review);
    res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

/* ----- 리뷰 삭제 API ----- */
const deleteReview = async (req, res) => {
  const { wineId } = req.params;

  try {
    const result = await wineService.deleteReview(wineId);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

module.exports = { review, deleteReview, getAllReviews, getReview };
