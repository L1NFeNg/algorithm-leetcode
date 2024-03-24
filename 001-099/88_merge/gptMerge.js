let merge = function (nums1, m, nums2, n) {
  // 初始化指针，p1指向nums1末尾的有效元素，p2指向nums2末尾，p指向nums1的末尾
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  // 从后往前遍历两个数组，依次比较并合并元素
  while ( p1 >= 0 && p2 >= 0 ) {
    // 若nums1中的元素较大，则将其放到合并后数组的末尾
    if (nums1[p1] > nums2[p2]) {
      nums1[p--] = nums1[p1--];
    } else {
      // 若nums2中的元素较大，则将其放到合并后数组的末尾
      nums1[p--] = nums2[p2--];
    }
  }

  // 若nums2中还有剩余元素，将其依次复制到nums1中
  while ( p2 >= 0 ) {
    nums1[p--] = nums2[p2--];
  }
};
