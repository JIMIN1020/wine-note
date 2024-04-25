// 필요한 모듈 불러오기
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// body-parser 세팅
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

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

// routes
const apiRouter = require("./routes/api");
const userRouter = require("./routes/user");
const wineRouter = require("./routes/wine");

app.use("/api", apiRouter);
app.use("/user", userRouter);
app.use("/wine", wineRouter);
