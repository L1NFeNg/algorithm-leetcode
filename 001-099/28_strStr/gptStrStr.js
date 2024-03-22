function strStr(haystack, needle) {
  // 边界情况：如果 needle 为空字符串，则返回 0
  if (needle === "") return 0;

  // 遍历 haystack
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // 在 haystack 中寻找与 needle 的第一个字符匹配的字符
    if (haystack[i] === needle[0]) {
      let match = true;
      // 检查接下来的字符是否匹配 needle 中的字符
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          match = false;
          break;
        }
      }
      // 如果所有字符都匹配，则返回当前索引
      if (match) return i;
    }
  }
  // 如果没有找到匹配项，则返回 -1
  return -1;
}

// 示例用法
const haystack = "hello";
const needle = "ll";
const index = strStr(haystack, needle);
console.log("第一个匹配项的下标：", index); // 输出：2
