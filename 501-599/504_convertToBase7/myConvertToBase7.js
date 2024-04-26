/**
 * @param {number} num
 * @return {string}
 */
let convertToBase7 = function (num) {
  let flag = true;
  if (num < 0) {
    flag = false;
    num = -num;
  }

  let result = "";

  while ( num >= 7 ) {
    let remainder = num % 7;
    if (remainder !== 0) {
      result = remainder + result;
    } else {
      result = "0" + result;
    }
    num = Math.floor(num / 7);
  }

  result = num + result;

  return flag ? result : "-" + result;
};

console.log(convertToBase7(-50));

// console.log(1 + "2");