/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let p = nums.length - 1;
  while (nums[p] == val) p--;
  for (let i in nums) {
    console.log(i, p, nums);
    if (i >= p) break;
    if (nums[i] == val) {
      [nums[i], nums[p]] = [nums[p], nums[i]];
      while (nums[p] == val) p--;
    }
  }
  console.log(nums)
  return p + 1;
};

console.log(removeElement([4, 5], 4));
