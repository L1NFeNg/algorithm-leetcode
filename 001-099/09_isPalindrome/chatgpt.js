function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  const str = String(x);
  const len = str.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// 示例用法
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
