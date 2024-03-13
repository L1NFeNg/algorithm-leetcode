// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
  // 创建一个哈希表，用于存储每个元素及其索引
  const numIndices = {};

  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // 计算当前元素与目标值的差值
    const complement = target - num;

    // 检查差值是否在哈希表中
    if (numIndices.hasOwnProperty(complement)) {
      // 如果存在，则返回差值的索引以及当前元素的索引
      return [numIndices[complement], i];
    } else {
      // 否则将当前元素及其索引存储到哈希表中
      numIndices[num] = i;
    }
  }

  // 如果不存在符合条件的组合，则返回空数组
  return [];
};

twoSum([2, 7, 11, 15], 9);