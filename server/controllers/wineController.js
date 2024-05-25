const { StatusCodes } = require("http-status-codes");
const wineService = require("../services/wineService");
const wineQuery = require("../queries/wineQuery");
const { verifyAccessToken } = require("../utils/token");

/* ----- 리뷰 전체 조회 API ----- */
const getAllReviews = async (req, res) => {
  try {
    const { limit, page } = req.query;
    const { category, name } = req.query;
    const accessToken = req.headers["authorization"].split(" ")[1];
    const userId = verifyAccessToken(accessToken);

    let sql = wineQuery.getAllReviews;

    if (category) {
      sql += ` AND wine.country = ${category}`;
    } else if (name) {
      sql += ` AND wine.name LIKE '%${name}%'`;
    }
    sql += ` LIMIT ${(+page - 1) * +limit}, ${+limit}`;

    const result = await wineService.getAllReviews(sql, userId);
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
  try {
    const { reviewId } = req.params;
    const accessToken = req.headers["authorization"].split(" ")[1];
    verifyAccessToken(accessToken);

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
  try {
    const { wine, review } = req.body;
    const accessToken = req.headers["authorization"].split(" ")[1];
    const userId = verifyAccessToken(accessToken);

    const result = await wineService.review(wine, review, userId);
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
  try {
    const { wineId } = req.params;
    const accessToken = req.headers["authorization"].split(" ")[1];
    verifyAccessToken(accessToken);

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
