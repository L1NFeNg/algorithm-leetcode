/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  } else if (x % 10 === 0) {
    return false;
  }
  const str = String(x);
  let left = 0;
  let right = str.length - 1;
  while ( left < right ) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

isPalindrome(100);