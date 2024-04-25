const { StatusCodes } = require("http-status-codes");
const conn = require("../db/connection");
const reviewQuery = require("../queries/reviewQuery");

/* ----- 리뷰 전체 조회 API ----- */
const getAllReviews = async () => {
  try {
    const result = await conn.query(
      reviewQuery.getAllReviews,
      "w+trJbtUGHf9ag=="
    );

    return {
      isSuccess: true,
      result: result[0],
    };
  } catch (err) {
    throw err;
  }
};

/* ----- 리뷰 상세 조회 API ----- */
const getReview = async (reviewId) => {
  try {
    // 리뷰 GET
    const reviewResult = await conn.query(reviewQuery.getReview, reviewId);
    const wineId = reviewResult[0][0].wine_id;

    // 와인 정보 GET
    const wineResult = await conn.query(reviewQuery.getWine, wineId);
    const grapeResult = await conn.query(reviewQuery.getGrape, wineId);

    return {
      isSuccess: true,
      result: {
        ...reviewResult[0][0],
        wine: {
          ...wineResult[0][0],
          grapes: grapeResult[0],
        },
      },
    };
  } catch (err) {
    throw err;
  }
};

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
      wine.img,
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

/* ----- 리뷰 삭제 API ----- */
const deleteReview = async (wineId) => {
  try {
    // 리뷰 DELETE
    await conn.query(reviewQuery.deleteReview, [
      wineId,
      "w+trJbtUGHf9ag==", // userId
    ]);

    // 품종 DELETE
    await conn.query(reviewQuery.deleteGrape, wineId);

    // 와인 DELETE
    await conn.query(reviewQuery.deleteWine, wineId);

    return {
      isSuccess: true,
      message: "리뷰 삭제 완료",
    };
  } catch (err) {
    throw err;
  }
};

module.exports = { review, deleteReview, getAllReviews, getReview };
