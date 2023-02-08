/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minArr;
  let currentSum = 0;
  let dynamicArr = [];
  for (num of nums) {
    dynamicArr.push(num);
    currentSum += num;
    while (currentSum > target) {
      if (
        currentSum >= target &&
        (!minArr || dynamicArr.length < minArr.length)
      )
        minArr = [...dynamicArr];
    currentSum -= dynamicArr.shift();
    }
    if (currentSum >= target && (!minArr || dynamicArr.length < minArr.length))
      minArr = [...dynamicArr];
  }
  return minArr?.length || 0;
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
console.log(minSubArrayLen(6, [10, 2, 3]));
