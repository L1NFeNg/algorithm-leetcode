function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid; // 找到目标值，返回索引
    } else if (nums[mid] < target) {
      left = mid + 1; // 目标值在右侧
    } else {
      right = mid - 1; // 目标值在左侧
    }
  }

  // 如果循环结束仍未找到目标值，返回插入位置
  return left;
}

// 示例用法
const nums = [1, 3, 5, 6];
const target = 5;
const index = searchInsert(nums, target);
console.log("插入位置或目标值的索引：", index); // 输出：2
