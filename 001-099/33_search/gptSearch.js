function search(nums, target) {
  let left = 0; // 初始化左指针
  let right = nums.length - 1; // 初始化右指针

  while (left <= right) { // 当左指针小于等于右指针时，继续搜索
    let mid = Math.floor((left + right) / 2); // 计算中间位置

    if (nums[mid] === target) { // 如果中间值就是目标值
      return mid; // 返回中间位置
    }

    // 判断左半部分是否有序
    if (nums[left] <= nums[mid]) {
      // 左半部分是有序的
      if (nums[left] <= target && target < nums[mid]) {
        // 如果目标值在左半部分范围内
        right = mid - 1; // 移动右指针到中间位置的左边
      } else {
        // 目标值不在左半部分范围内
        left = mid + 1; // 移动左指针到中间位置的右边
      }
    } else {
      // 右半部分是有序的
      if (nums[mid] < target && target <= nums[right]) {
        // 如果目标值在右半部分范围内
        left = mid + 1; // 移动左指针到中间位置的右边
      } else {
        // 目标值不在右半部分范围内
        right = mid - 1; // 移动右指针到中间位置的左边
      }
    }
  }

  return -1; // 如果找不到目标值，返回 -1
}

// 示例调用
const rotatedArray = [4, 5, 6, 7, 0, 1, 2]; // 旋转排序数组
const target = 0; // 目标值
const result = search(rotatedArray, target); // 搜索目标值
console.log(result); // 输出: 4
