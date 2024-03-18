/**
 * @param {number[]} nums 输入数组
 * @param {number} val 需要移除的数字
 * @return {number} 移除数字后数组的长度
 */
let removeElement = function (nums, val) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === val && nums[left] !== val) {
      left = right;
    }
    if (nums[right] !== val) {
      if (nums[left] === val) {
        nums[left] = nums[right];
        nums[right] = val;
      }
      left++;
    }
  }
  return left;
};