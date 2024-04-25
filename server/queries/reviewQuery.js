exports.insertWine = `INSERT INTO wine (name, type, country, region, price, url) VALUES (?)`;
exports.insertGrapes = `INSERT INTO grape (wine_id, name, percent) VALUES (?)`;
exports.insertReview = `INSERT INTO review (wine_id, user_id, color, color_intensity, aroma, aroma_intensity, flavor, 
    sweetness, acidity, tannin, body, rating, conclusion) VALUES (?)`;
