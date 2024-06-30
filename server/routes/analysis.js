const express = require("express");
const router = express.Router();
const analysisController = require("../controllers/analysisController");

router.get("/wine", analysisController.getWineStatistics);
router.get("/rating", analysisController.getRatingStatistics);
router.get("/type", analysisController.getTypeStatistics);
router.get("/country", analysisController.getCountryStatistics);

module.exports = router;
