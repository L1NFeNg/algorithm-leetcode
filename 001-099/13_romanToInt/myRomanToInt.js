let map = new Map();

map.set("I", 1);
map.set("V", 5);
map.set("X", 10);
map.set("L", 50);
map.set("C", 100);
map.set("D", 500);
map.set("M", 1000);

/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  s = s.split("").reverse().join("");
  let sum = 0;
  let currentNumber = 0;
  for (const sElement of s) {
    if (sElement === "I") {
      currentNumber = Math.max(map.get("I"), currentNumber);
      if (currentNumber <= map.get("I")) sum += map.get("I");
      else sum -= map.get("I");
    }
    if (sElement === "V") {
      currentNumber = Math.max(map.get("V"), currentNumber);
      if (currentNumber <= map.get("V")) sum += map.get("V");
      else sum -= map.get("V");
    }
    if (sElement === "X") {
      currentNumber = Math.max(map.get("X"), currentNumber);
      if (currentNumber <= map.get("X")) sum += map.get("X");
      else sum -= map.get("X");
    }
    if (sElement === "L") {
      currentNumber = Math.max(map.get("L"), currentNumber);
      if (currentNumber <= map.get("L")) sum += map.get("L");
      else sum -= map.get("L");
    }
    if (sElement === "C") {
      currentNumber = Math.max(map.get("C"), currentNumber);
      if (currentNumber <= map.get("C")) sum += map.get("C");
      else sum -= map.get("C");
    }
    if (sElement === "M") {
      currentNumber = Math.max(map.get("M"), currentNumber);
      if (currentNumber <= map.get("M")) sum += map.get("M");
      else sum -= map.get("M");
    }
    if (sElement === "D") {
      currentNumber = Math.max(map.get("D"), currentNumber);
      if (currentNumber <= map.get("D")) sum += map.get("D");
      else sum -= map.get("D");
    }
  }
  console.log(sum);
  return sum;
};

let s;
s = "MCMXCIV";
romanToInt(s);

