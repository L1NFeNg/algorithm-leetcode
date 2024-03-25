/**
 * @param {string} s
 * @return {number}
 */
let myAtoi = function (s) {
  s = s.trim();
  s = s.split(" ")[0];
  let sign = "";
  let str = "";
  for (const sElement of s) {
    if (sElement === "+" || sElement === "-") {
      if (!sign && str === "") {
        sign = sElement;
        continue;
      } else if (sign && str === "") {
        return 0;
      } else if (!sign && str) {
        break;
      }
    } else if (/^[0-9]$/.test(sElement)) {
      str += sElement;
      continue;
    }
    break;
  }
  if (str === "") return 0;
  if (sign === "-") {
    return Math.max(-2147483648, -Number(str));
  } else {
    return Math.min(2147483647, Number(str));
  }
};

let s = "-5-";
console.log(myAtoi(s));