/**
 * 18. 四数之和
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
 * 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。
 * https://leetcode.cn/problems/4sum/description/
 * */

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const result = [];
  for (let k = 0; k < len - 3; k++) {
    if (nums[k] > target && target > 0) return result;//剪枝
    if (k > 0 && nums[k] === nums[k - 1]) continue;//去重
    for (let i = k + 1; i < len - 2; i++) {
      // 0 1 1 1 1，遍历到1直接返回
      if (nums[i] > target && target > 0) break;
      // 0 0 -1 1 1 1 1，遍历到第二个0直接返回
      if (i > k + 1 && nums[i] === nums[i - 1]) continue;
      let left = i + 1, right = len - 1;
      while (left < right) {
        const sum = nums[k] + nums[i] + nums[left] + nums[right];
        if (sum < target) left++;
        else if (sum > target) right--;
        else {
          result.push([nums[k], nums[i], nums[left], nums[right]]);
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
  }
  return result;
};