/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  digits[digits.length - 1] += 1;
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] === 10) {
      digits[i] = 0;
      digits[i - 1] += 1;
    } else {
      break;
    }
  }
  if (digits[0] === 10) {
    digits[0] = 0;
    digits = [1, ...digits];
  }
  return digits;
};

let digits;
// digits = [1, 2, 3];
digits = [0];
// digits = [4, 3, 2,1];
// digits = [9, 9, 9];
console.log(plusOne(digits));
