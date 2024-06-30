const { StatusCodes } = require("http-status-codes");
const analysisService = require("../services/analysisService");
const { verifyAccessToken } = require("../utils/token");

const getWineStatistics = async (req, res) => {
  try {
    const accessToken = req.headers["authorization"].split(" ")[1];
    const userId = verifyAccessToken(accessToken);

    const result = await analysisService.getWineStatistics(userId);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

const getRatingStatistics = async (req, res) => {
  try {
    const accessToken = req.headers["authorization"].split(" ")[1];
    const userId = verifyAccessToken(accessToken);

    const result = await analysisService.getRatingStatistics(userId);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

module.exports = {
  getWineStatistics,
  getRatingStatistics,
};
