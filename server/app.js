// 필요한 모듈 불러오기
const express = require("express");
const app = express();

// body-parser 세팅
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// port 할당
const PORT = process.env.PORT || 4000;

// app entry point
app.get("/", (req, res) => {
  res.send(`Response Complate`);
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}...`);
});
