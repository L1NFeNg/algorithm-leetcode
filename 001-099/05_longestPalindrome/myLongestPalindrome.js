/*
  给你一个字符串 s，找到 s 中最长的回文子串。
  如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
*/

 /**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  let palArr = [];
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;
    let isSameFlag = true;
    palArr[i] = s[i];
    while ( left >= 0 || right <= s.length - 1 ) {
      if (s[right] === s[i] && isSameFlag) {
        palArr[i] = palArr[i] + s[right];
        right++;
      } else if (s[left] === s[i] && isSameFlag) {
        palArr[i] = s[left] + palArr[i];
        left--;
      } else if (s[left] === s[right]) {
        isSameFlag = false;
        palArr[i] = s[left] + palArr[i] + s[right];
        left--;
        right++;
      } else {
        break;
      }
    }
  }
  for (const arrElement of palArr) {
    if (arrElement.length > maxLength) maxLength = arrElement.length;
  }
  for (const arrElement of palArr) {
    if (arrElement.length === maxLength) {
      return arrElement;
    }
  }
};

console.log(longestPalindrome("a"));
console.log(longestPalindrome("bb"));
console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("dddd"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("aaaa"));