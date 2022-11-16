// 双指针，利用数组有序的特性
var sortedSquares = function (nums) {
  let index = nums.length - 1;
  let left = 0, right = index;
  const result = [];
  while (left <= right) {
      const leftValue = Math.pow(nums[left], 2);
      const rightValue = Math.pow(nums[right], 2);
      if (leftValue > rightValue) {
          result[index] = leftValue;
          left++;
      } else {
          result[index] = rightValue;
          right--;
      }
      index--;
  }
  return result;
};

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));// [0, 1, 9, 16, 100]