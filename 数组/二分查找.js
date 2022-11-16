// https://leetcode.cn/problems/binary-search/

//左闭右闭
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (target > nums[middle]) {
      left = middle + 1;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
//左闭右开，注意边界条件。
var search = function (nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (target > nums[middle]) {
      left = middle + 1;
    } else if (target < nums[middle]) {
      right = middle;
    } else {
      return middle;
    }
  }
  return -1;
};
