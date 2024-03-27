/*
  给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

  0 <= a, b, c, d < n
  a、b、c 和 d 互不相同
  nums[a] + nums[b] + nums[c] + nums[d] == target
  你可以按 任意顺序 返回答案 。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function (nums, target) {
  let result = [];
  if (nums.length < 4) return result;
  nums = nums.sort((a, b) => a - b);

  for (let a = 0; a <= nums.length - 4; a++) {
    for (let b = a + 1; b <= nums.length - 3; b++) {
      for (let c = b + 1; c <= nums.length - 2; c++) {
        for (let d = c + 1; d <= nums.length - 1; d++) {
          if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
            let flag = true;
            for (const r of result) {
              if (r[0] === nums[a]
                && r[1] === nums[b]
                && r[2] === nums[c]
                && r[3] === nums[d]) {
                flag = false;
              }
            }
            if (flag) result.push([nums[a], nums[b], nums[c], nums[d]]);
          }
        }
      }
    }
  }
  return result;
};

let nums, target;
nums = [1, 0, -1, 0, -2, 2];
target = 0;
// nums = [2, 2, 2, 2, 2];
// target = 8;
console.log(fourSum(nums, target));