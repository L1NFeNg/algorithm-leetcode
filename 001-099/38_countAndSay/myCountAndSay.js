/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function (n) {
  if (n === 1) {
    return "1";
  } else {
    return RLE(countAndSay(n - 1));
  }
};

/**
 * @param {string} str
 * @return {string}
 */
let RLE = function (str) {
  let rle = "";
  let strArray = str.split("");

  let left = 0;
  let right = left;
  while (right < strArray.length + 1) {
    if (strArray[left] === strArray[right]) {
      right++;
    } else {
      rle += right - left;
      rle += strArray[left];
      left = right;
    }
  }

  return rle;
};
