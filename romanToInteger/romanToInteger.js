// previous solution was 94ms, this is 87ms

// move this out as it could be used for other functions
const conversionChart = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function (s) {
  let integerValue = 0;

  for (let i = 0; i <= s.length - 1; i++) {
    const char = s[i];
    const nextChar = s[i + 1];
    conversionChart[nextChar] && conversionChart[char] < conversionChart[nextChar]
      ? (integerValue -= conversionChart[char])
      : (integerValue += conversionChart[char]);
  }
  return integerValue;
};