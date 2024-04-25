const { StatusCodes } = require("http-status-codes");
const conn = require("../db/connection");
const reviewQuery = require("../queries/reviewQuery");

/* ----- 리뷰 작성 API ----- */
const review = async (wine, review) => {
  try {
    // wine 정보 INSERT
    const wineValues = [
      wine.name,
      wine.type,
      wine.country,
      wine.region,
      wine.price,
      wine.url,
    ];

    const wineInsertResult = await conn.query(reviewQuery.insertWine, [
      wineValues,
    ]);
    const wineId = wineInsertResult[0].insertId;

    // 품종 정보 INSERT
    const grapeValues = wine.grapes.map((grape) => [
      wineId,
      grape.name,
      grape.percent,
    ]);
    await conn.query(reviewQuery.insertGrapes, grapeValues);

    // 리뷰 INSERT
    const reviewValues = [
      wineId,
      "w+trJbtUGHf9ag==", // userId
      review.color,
      review.color_intensity,
      review.aroma,
      review.aroma_intensity,
      review.flavor,
      review.sweetness,
      review.acidity,
      review.tannin,
      review.body,
      review.rating,
      review.conclusion,
    ];
    await conn.query(reviewQuery.insertReview, [reviewValues]);

    return {
      isSuccess: true,
      message: "리뷰 작성 완료",
    };
  } catch (err) {
    throw err;
  }
};

const deleteReview = (req, res) => {
  //
};

module.exports = { review, deleteReview };
