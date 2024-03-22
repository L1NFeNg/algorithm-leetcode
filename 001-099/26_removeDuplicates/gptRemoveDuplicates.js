function removeDuplicates(nums) {
  // 边界情况：如果数组为空，则返回0
  if (nums.length === 0) return 0;

  let count = 1; // 记录唯一元素的个数，初始化为1
  for (let i = 1; i < nums.length; i++) {
    // 如果当前元素不等于前一个元素，则将当前元素移动到正确的位置
    if (nums[i] !== nums[i - 1]) {
      nums[count] = nums[i]; // 将当前唯一元素移到正确的位置
      count++; // 唯一元素个数加1
    }
  }

  // 返回唯一元素的个数
  return count;
}

// 示例用法
const nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6];
const uniqueCount = removeDuplicates(nums);
console.log("删除重复元素后的数组：", nums.slice(0, uniqueCount)); // 输出删除重复元素后的数组
console.log("唯一元素的个数：", uniqueCount); // 输出唯一元素的个数
