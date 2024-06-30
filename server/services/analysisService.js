const conn = require("../db/connection");
const analysisQuery = require("../queries/analysisQuery");

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

module.exports = {
  getWineStatistics,
};
