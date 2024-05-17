let nextPermutation = function (nums) {
  let max_left = -1;
  let max_right = -1;
  let right = nums.length - 1;
  while ( right > 0 && right > max_left ) {
    let left = right - 1;
    while ( left >= 0 && left > max_left ) {
      if (nums[left] < nums[right]) {
        max_left = left;
        max_right = right;
      }
      left--;
    }
    right--;
  }
  console.log(max_left);
  console.log(max_right);
  let left = 0;
  if (max_left !== 0 || max_right !== 0) {
    let save = nums[max_left];
    nums[max_left] = nums[max_right];
    nums[max_right] = save;
    left = max_left + 1;
  }
  right = nums.length - 1;

  while ( left < right ) {
    let save = nums[left];
    nums[left] = nums[right];
    nums[right] = save;
    left++;
    right--;
  }
  console.log(nums);
};


// let nums = [1, 2, 3];
// let nums = [3, 2, 1];
let nums1 = [1, 3, 2];
nextPermutation(nums1);
let nums2 = [4, 2, 0, 2, 3, 2, 0];
nextPermutation(nums2);