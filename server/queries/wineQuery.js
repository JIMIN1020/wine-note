// 리뷰 작성 쿼리
exports.insertWine = `INSERT INTO wine (name, type, country, region, price, url, img, vintage) VALUES (?)`;
exports.insertGrapes = `INSERT INTO grape (wine_id, name, percent) VALUES (?)`;
exports.insertReview = `INSERT INTO review (wine_id, user_id, color, color_intensity, aroma, aroma_intensity, flavor, 
    sweetness, acidity, tannin, body, rating, conclusion) VALUES (?)`;

// 리뷰 삭제 쿼리
exports.deleteReview = `DELETE FROM review WHERE wine_id = ? AND user_id = ?`;
exports.deleteGrape = `DELETE FROM grape WHERE wine_id = ?`;
exports.deleteWine = `DELETE FROM wine WHERE id = ?`;

// 리뷰 전체 조회 쿼리
exports.getAllReviews = `SELECT wine.name, wine.country, wine.region, wine.img, wine.vintage, review.rating FROM review LEFT JOIN wine ON wine.id = review.wine_id WHERE review.user_id = ?`;

// 리뷰 상세 조회 쿼리
exports.getReview = `SELECT id, wine_id, color, color_intensity, aroma, aroma_intensity, flavor, sweetness, acidity, tannin, body, rating, conclusion FROM review WHERE id = ?`;
exports.getWine = `SELECT name, type, country, region, price, url, img, vintage FROM wine WHERE id = ?`;
exports.getGrape = `SELECT name, percent FROM grape WHERE wine_id = ?`;
