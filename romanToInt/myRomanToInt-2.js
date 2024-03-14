let map = new Map();

map.set("I", 1);
map.set("V", 5);
map.set("X", 10);
map.set("L", 50);
map.set("C", 100);
map.set("D", 500);
map.set("M", 1000);

let romanToInt = function (s) {
  s = s.split("").reverse().join("");
  let sum = 0;
  let currentNumber = 0;
  for (const sElement of s) {
    let value = map.get(sElement);
    currentNumber = Math.max(value, currentNumber);
    if (currentNumber <= value) sum += value;
    else sum -= value;
  }
  return sum;
};