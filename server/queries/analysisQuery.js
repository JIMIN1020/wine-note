exports.getWineCount = `SELECT COUNT(*) as count FROM review WHERE user_id = ?`;
exports.getWinePrices = `SELECT TRIM(TRAILING '.' FROM TRIM(TRAILING '0' FROM ROUND(AVG(wine.price), 1))) as average_price FROM review LEFT JOIN wine ON review.wine_id = wine.id WHERE review.user_id = ?`;
exports.getTerm = `WITH ranked_dates AS (SELECT created_at, LAG(created_at) OVER (ORDER BY created_at) AS prev_created_at FROM review WHERE user_id = ?) SELECT TRIM(TRAILING '.' FROM TRIM(TRAILING '0' FROM ROUND(AVG(DATEDIFF(created_at, prev_created_at)), 1))) AS avg_date_diff FROM ranked_dates WHERE prev_created_at IS NOT NULL;`;
exports.getRatings = `SELECT rating FROM review WHERE user_id = ?`;
