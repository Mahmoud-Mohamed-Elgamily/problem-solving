const moveZeroes = (nums) => {
  for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
    if (nums[cur] != 0) {
      [nums[lastNonZeroFoundAt++], nums[cur]] = [
        nums[cur],
        nums[lastNonZeroFoundAt],
      ];
    }
  }
};

console.log(moveZeroes([1, 5, 2, 0, 5, 89, 0, 0, 25, 6, 0]));
