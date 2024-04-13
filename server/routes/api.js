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

  console.log(chatCompletion);
  // response
  res.send(chatCompletion.choices[0].message.content);
});

module.exports = router;
