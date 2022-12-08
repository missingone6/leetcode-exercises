/**
 * 15. 三数之和
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
你返回所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
 * https://leetcode.cn/problems/3sum/description/
 * */

// 排序+双指针。时间n2，空间logn(快排)+n2(结果集)+n(实际情况不应该修改原数组nums)
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    // 0 1 1 1 1，遍历到1直接返回
    if (nums[i] > 0) return result;
    // 0 0 -1 1 1 1 1，遍历到第二个0直接返回
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        result.push([nums[i], nums[left], nums[right]]);
        do {
          // 0 -1 -1 1 1, left遍历到第二个-1应该直接跳过
          left++;
        } while (left < right && nums[left] === nums[left - 1])
        do {
          right--;
        } while (left < right && nums[right] === nums[right + 1])
      }
    }
  }
  return result;
};