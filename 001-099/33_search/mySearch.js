/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while ( left <= right ) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (left === right && nums[left] !== target) {
      return -1;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] === target) return left;
      if (nums[mid] === target) return mid;
      if (nums[left] < target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] <= nums[right]) {
      if (nums[mid] === target) return mid;
      if (nums[right] === target) return right;
      if (nums[mid] < target && target < nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};