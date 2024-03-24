/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
  if (n === 0) return;

  let right_1 = m - 1;
  let right_2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (right_1 >= 0 && right_2 >= 0) {
      if (nums1[right_1] > nums2[right_2]) {
        nums1[i] = nums1[right_1];
        nums1[right_1] = 0;
        right_1--;
      } else {
        nums1[i] = nums2[right_2];
        right_2--;
      }
    } else if (right_2 >= 0) {
      nums1[i] = nums2[right_2];
      right_2--;
    }
  }
  nums1.forEach(x => console.log(x));
};
