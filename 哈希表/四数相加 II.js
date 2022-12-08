/**
 * 454. 四数相加 II
 * 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 * https://leetcode.cn/problems/4sum-ii/description/
 * 
*/

// 两个为一组+哈希map。时间n2，空间n2
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map();
  let cnt = 0;
  nums1.forEach((value1) => {
    nums2.forEach((value2) => {
      const key = value1 + value2;
      if (map.has(key)) {
        map.set(key, map.get(key) + 1)
      } else {
        map.set(key, 1)
      }
    })
  });
  nums3.forEach((value1) => {
    nums4.forEach((value2) => {
      const key = 0 - (value1 + value2);
      if (map.has(key)) {
        cnt += map.get(key);
      }
    })
  });
  return cnt;
};