/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function (haystack, needle) {
  let left = 0;
  let nextLeft = [];
  while ( left < haystack.length ) {
    if (needle.length > haystack.length - left) {
      return -1;
    }
    let right = left;
    for (let i = 0; i < needle.length; i++) {
      if (haystack[left + i] === needle[0]) {
        if (i) nextLeft.push(left + i);
      }
      if (haystack[left + i] !== needle[i]) {
        right++;
        break;
      } else {
        right++;
      }
      if (right - left === needle.length) {
        return left;
      }
    }
    if (nextLeft.length === 0) left = right;
    for (let i = 0; i < nextLeft.length; i++) {
      if (nextLeft[i] > left) {
        left = nextLeft[i];
        break;
      } else {
        nextLeft.splice(i, 1);
      }
    }
  }
  if (left >= haystack.length) {
    return -1;
  }
};

// let haystack = "leetcode", needle = "leeto";
// let haystack = "aabaaabaaac", needle = "aabaaac";
// let haystack = "sadbutsad", needle = "sad";
let haystack = "hello", needle = "ll";
// let haystack = "mississippi", needle = "sippj";
console.log(strStr(haystack, needle));
