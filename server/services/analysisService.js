const conn = require("../db/connection");
const analysisQuery = require("../queries/analysisQuery");
const { calculateAverage, calculatePercentage } = require("../utils/calculate");

const getWineStatistics = async (userId) => {
  try {
    // 와인 수
    const count = await conn
      .query(analysisQuery.getWineCount, userId)
      .then((res) => res[0][0].count);

    // 주기
    const term = await conn
      .query(analysisQuery.getTerm, userId)
      .then((res) => res[0][0].avg_date_diff);

    // 가격
    const avgPrice = await conn
      .query(analysisQuery.getWinePrices, userId)
      .then((res) => res[0][0].average_price);

    return {
      totalCount: count,
      averagePrice: avgPrice,
      averageTerm: term,
    };
  } catch (err) {
    throw err;
  }
};

const getRatingStatistics = async (userId) => {
  try {
    const ratingResult = await conn
      .query(analysisQuery.getRatings, userId)
      .then((res) => res[0]);

    const ratingArray = ratingResult.map((row) => row.rating);

    // 최대, 최저, 평균 평점
    const minRating = Math.min(...ratingArray);
    const maxRating = Math.max(...ratingArray);
    const avgRating = calculateAverage(ratingArray);

    let ratings = {
      0: 0,
      0.5: 0,
      1: 0,
      1.5: 0,
      2: 0,
      2.5: 0,
      3: 0,
      3.5: 0,
      4: 0,
      4.5: 0,
      5: 0,
    };
    // 별점별 개수
    ratingArray.forEach((num) => {
      ratings[num]++;
    });

    return {
      minRating,
      maxRating,
      avgRating,
      ratings,
    };
  } catch (err) {
    throw err;
  }
};

const getTypeStatistics = async (userId) => {
  try {
    const typeResult = await conn
      .query(analysisQuery.getTypes, userId)
      .then((res) => res[0]);

    const typeArray = typeResult.map((row) => row.type);
    const percentage = calculatePercentage(typeArray);

    return percentage;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getWineStatistics,
  getRatingStatistics,
  getTypeStatistics,
};
