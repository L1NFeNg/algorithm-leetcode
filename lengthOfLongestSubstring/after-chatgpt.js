function lengthOfLongestSubstring(s) {
  let max = 0;
  let charSet = new Set();
  let left = 0;
  let right = 0;
  while ( right < s.length ) {
    if (!charSet.has(s.charAt(right))) {
      charSet.add(s.charAt(right));
      right++;
      max = Math.max(max, right - left);
    } else {
      charSet.delete(s.charAt(left));
      left++;
    }
  }
  return max;
}