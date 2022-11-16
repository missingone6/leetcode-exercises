/**
1.暴力解法两个for循环，时间复杂度O(n^2)。
2.采用滑动窗口，将O(n^2)暴力解法降为O(n)。两个指针i和j，将j不断右移，直到满足>target。此时再减少i，减小左边界。减少左边界要用while不能用if。当当前长度小于记录的长度，就将result更新为当前长度。
3.时间复杂度：O(n) 空间复杂度：O(1)
不要以为for里放一个while就以为是O(n^2)啊， 主要是看每一个元素被操作的次数，每个元素在滑动窗后进来操作一次，出去操作一次，每个元素都是被操作两次，所以时间复杂度是 2 × n 也就是O(n)。
*/

// 1.滑动窗口
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let result = Infinity;
  const len = nums.length;
  for (let j = 0, i = 0; j < len; j++) {
    sum += nums[j];
    while (sum >= target) {
      const temp = j - i + 1;
      if (temp < result) {
        result = temp;
      }
      sum -= nums[i++];
    }
  }
  if (result === Infinity) {
    return 0;
  }
  return result;
};
const target = 7, nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums))//2

//2.暴力解法
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let result = Infinity;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      if (sum >= target) {
        const temp = j - i + 1;
        if (temp < result) {
          result = temp;
        }
        break;
      }
    }
  }
  return result === Infinity ? 0 : result;
};