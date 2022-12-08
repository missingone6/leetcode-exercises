/**
 * 349. 两个数组的交集
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。
 * 输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

示例 2：
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
*/


// 用set。 时间：m+n，空间：m+n
var intersection = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const result = new Set();
  nums2.forEach(item => {
      if (nums1Set.has(item)) {
          result.add(item);
      }
  })
  return Array.from(result)
};

// 用数组，因为限制了 0 <= nums1[i], nums2[i] <= 1000。
var intersection = function (nums1, nums2) {
  const arr = new Array(1001);
  const result = new Set();
  nums1.forEach(value => {
      arr[value] = 1;
  })
  nums2.forEach(value => {
      if (arr[value] === 1) {
          result.add(value)
      }
  })
  return Array.from(result);
};