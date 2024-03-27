/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function fourSum(nums, target) {
  const n = nums.length;
  const result = [];
  // 对数组进行排序
  nums.sort((a, b) => a - b);
  // 固定第一个元素
  for (let a = 0; a < n - 3; a++) {
    // 避免重复元素
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    // 固定第二个元素
    for (let b = a + 1; b < n - 2; b++) {
      // 避免重复元素
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      let left = b + 1;
      let right = n - 1;
      // 使用双指针法寻找两数之和等于目标值
      while ( left < right ) {
        const sum = nums[a] + nums[b] + nums[left] + nums[right];
        if (sum === target) {
          // 找到符合条件的四元组
          result.push([nums[a], nums[b], nums[left], nums[right]]);
          // 移动指针并跳过重复元素
          while ( left < right && nums[left] === nums[left + 1] ) left++;
          while ( left < right && nums[right] === nums[right - 1] ) right--;
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};
