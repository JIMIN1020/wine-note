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

const countCountries = (arr) => {
  const countMap = {};

  // 배열 내 각 문자열의 개수를 세기
  arr.forEach((str) => {
    countMap[str] ? countMap[str]++ : (countMap[str] = 1);
  });

  // 객체를 배열로 변환하여 정렬
  const countArray = Object.entries(countMap);

  // 개수를 기준으로 내림차순 정렬
  countArray.sort((a, b) => b[1] - a[1]);

  // 상위 3개만 추출하여 객체로 반환
  const top3 = countArray.slice(0, 3).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});

  return top3;
};

module.exports = {
  calculateAverage,
  calculatePercentage,
  countCountries,
};
