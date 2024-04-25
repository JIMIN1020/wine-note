const { StatusCodes } = require("http-status-codes");
const reviewService = require("../services/reviewService");

/* ----- 리뷰 작성 API ----- */
const review = async (req, res) => {
  const { wine, review } = req.body;

  try {
    const result = await reviewService.review(wine, review);
    res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

const deleteReview = (req, res) => {
  //
};

module.exports = { review, deleteReview };
