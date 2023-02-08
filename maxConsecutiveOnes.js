/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let streak = 0;
  for (let num of nums) {
    if (num == 1) streak++;
    else {
      if (streak > max) max = streak;
      streak = 0;
    }
  }

  if (streak > max) max = streak;
  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1,1,1,0, 1, 1]));
