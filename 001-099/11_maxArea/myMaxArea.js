/*
  盛最多水的容器
*/


/*
  给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

  找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

  返回：容器可以储存的最大水量。

  说明：你不能倾斜容器。
*/

/* 贪心 数组 双指针 */

/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  /* 思路：让底从最长开始，然后逐渐“去掉短板” */
  let maxS = 0;
  let left = 0;
  let right = height.length - 1;

  while ( left < right ) {
    let w = right - left;
    let h = Math.min(height[left], height[right]);
    let s = w * h;
    maxS = Math.max(s, maxS);
    // 两板相等，去短板
    if (height[left] < height[right]) {
      left++;
      // continue;
    } else/* (height[left] > height[right])*/ {
      right--;
    }
    // if (height[left] === height[right]) {
    //   if (height[left + 1] <= height[right - 1]) {
    //     left++;
    //   } else {
    //     right--;
    //   }
    // }
  }
  return maxS;
};