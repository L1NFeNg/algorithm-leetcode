/**
 * @param {number[]} nums 输入数组
 * @param {number} val 需要移除的数字
 * @return {number} 移除数字后数组的长度
 */
let removeElement = function (nums, val) {


  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // console.log(`left:nums[${left}]:${nums[left]}`);
    // console.log(`right:nums[${right}]:${nums[right]}`);
    if (nums[right] === val) {
      if (nums[left] !== val) {
        left = right;
      }
    }
    if (nums[right] !== val) {
      if (nums[left] !== val) {
      }
      if (nums[left] === val) {
        // console.log(right);
        nums[left] = nums[right];
        nums[right] = val;
      }
      left++;
    }
    // console.log(nums);
  }
  return left;
};

let nums = [], val = 3;
console.log(removeElement(nums, val));