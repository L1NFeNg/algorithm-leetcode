/**
 * @param {number[]} nums
 */


let NumArray = function (nums) {
  this.sumMap = [nums[0]];
  for (let i = 1; i <= nums.length - 1; i++) {
    this.sumMap[i] = this.sumMap[i - 1] + nums[i];
  }
};


/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sumMap[right] - (this.sumMap[left - 1] ? this.sumMap[left - 1] : 0);
};

let obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumMap);
console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
console.log(obj.sumRange(0, 5));

// 2 5 0-5 - 0-2