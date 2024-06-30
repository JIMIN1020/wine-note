const calculateAverage = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;

  return Number(average.toFixed(1));
};

const calculatePercentage = (numbers) => {
  const countMap = {};
  const totalCount = numbers.length;

  // 빈도 계산
  numbers.forEach((num) => {
    countMap[num] ? countMap[num]++ : (countMap[num] = 1);
  });

  // 비율 계산
  const percentages = {};

  Object.keys(countMap).forEach((key) => {
    const count = countMap[key];
    const percentage = (count / totalCount) * 100;

    percentages[key] = Number(percentage.toFixed(2)); // 소수점 둘째 자리까지 반올림
  });

  return percentages;
};

const countContries = (arr) => {
  const countMap = {};

  arr.forEach((str) => {
    countMap[str] ? countMap[str]++ : (countMap[str] = 1);
  });

  return countMap;
};

module.exports = {
  calculateAverage,
  calculatePercentage,
  countContries,
};
