function lengthOfLongestSubstring(s) {
  // 初始化最大长度为0
  let max = 0;
  // 使用集合来存储当前窗口中的字符
  let charSet = new Set();
  // 初始化窗口左右边界
  let left = 0;
  let right = 0;

  // 右指针移动到字符串末尾
  while (right < s.length) {
    // 如果窗口中没有重复字符
    if (!charSet.has(s.charAt(right))) {
      // 将当前字符加入集合
      charSet.add(s.charAt(right));
      // 更新最大子串长度
      max = Math.max(max, charSet.size);
      // 右指针右移
      right++;
    } else {
      // 如果窗口中出现重复字符
      // 将左指针右移，并将左边界字符从集合中删除，直到窗口中不再包含重复字符
      charSet.delete(s.charAt(left));
      left++;
    }
  }

  // 返回最大子串长度
  return max;
}

// 示例
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // 输出 3，因为最长子串是 "abc"，长度为 3
