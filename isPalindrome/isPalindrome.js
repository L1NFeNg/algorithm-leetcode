/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  }
  console.log(x.toString().split("").reverse().join(""));
  return x === Number(x.toString().split("").reverse().join(""));
};

isPalindrome(100);