// 1.双指针
var removeElement = function (nums, val) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
      if (nums[fast] !== val) {
          nums[slow] = nums[fast];
          slow++;
      }
  }
  return slow;
};
// 2.双指针。避免了需要保留的元素的重复赋值操作。但是会打乱顺序。
var removeElement = function (nums, val) {
  let left = 0, right = nums.length;
  while (left < right) {
      if (nums[left] === val) {
          nums[left] = nums[right - 1];
          right--;
      } else {
          left++;
      }
  }
  return left;
};
// 3.暴力解法
var removeElement = function (nums, val) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
      if (nums[i] === val) {
          for (let j = i; j < len - 1; j++) {
              nums[j] = nums[j + 1];
          }
          i--;
          len--;
      }
  }
  return len;
};

//测试
const nums = [0,1,2,2,3,0,4,2];
const len = removeElement(nums, 2);
console.log(len, nums.slice(0, len))//5 [0, 1, 4, 0, 3]