const calculateAverage = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;

  return Number(average.toFixed(1));
};

module.exports = {
  calculateAverage,
};
