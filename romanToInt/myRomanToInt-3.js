let map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);

let romanToInt = function (s) {
  let sum = 0;
  let currentNumber = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let value = map.get(s[i]);
    currentNumber = Math.max(value, currentNumber);
    currentNumber <= value ? sum += value : sum -= value;
  }
  return sum;
};