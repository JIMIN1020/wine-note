const express = require("express");
const router = express.Router();

/* ---------- OpenAI API ---------- */
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// endpoint for chat GPT
router.post("/chat", async (req, res) => {
  // 요청값 -> 메세지 받아오기
  const messages = req.body;

  // 요청 데이터
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
  });
  // response
  res.status(200).json({
    isSuccess: true,
    result: chatCompletion.choices[0].message.content,
  });
});

/* ---------- Vivino API ---------- */
const vivinoAPI = require("../vivino");

router.post("/wine-search", async (req, res) => {
  const { wines } = req.body;

  try {
    const result = await vivinoAPI(wines);
    res.status(200).json({
      isSuccess: true,
      result,
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: err.message,
    });
  }
});

module.exports = router;
