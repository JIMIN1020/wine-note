const express = require("express");
const router = express.Router();
const analysisController = require("../controllers/analysisController");

router.get("/wine", analysisController.getWineStatistics);

module.exports = router;