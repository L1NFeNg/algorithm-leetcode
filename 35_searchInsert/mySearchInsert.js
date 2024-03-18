/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
  if (nums[0] >= target) return 0;
  if (nums[nums.length - 1] === target) return nums.length - 1;
  if (nums[nums.length - 1] < target) return nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i - 1] < target && nums[i] > target) {
      return i;
    } else if (nums[i] < target && nums[i + 1] > target) {
      return i + 1;
    }
  }
};

// let nums = [1, 3, 5, 6], target = 5;
// let nums = [1,3,5,6], target = 2
let nums = [1, 3], target = 2;
console.log(searchInsert(nums, target));