/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const missingValues =
    (rolls.length + n) * mean - rolls.reduce((acc, a) => acc + a, 0);
  if (missingValues < 0 || missingValues / 6 > n || missingValues < n) return [];
  let result = [];

  if (missingValues % n == 0) result = new Array(n).fill(missingValues / n);
  else
    result = [
      ...new Array(n - 1).fill(Math.floor(missingValues / n)),
      Math.floor(missingValues / n) + 1,
    ];

  let resultSum = result.reduce((acc, a) => acc + a, 0);
  let rollsSum = rolls.reduce((acc, a) => acc + a, 0);
  if ((resultSum + rollsSum) / (rolls.length + result.length) != mean)
    for (let index = 0; index < missingValues - resultSum; index++) {
      result[index]++;
    }
  return result;
};

// console.log(
//   missingRolls(
//     [
//       4, 2, 2, 5, 4, 5, 4, 5, 3, 3, 6, 1, 2, 4, 2, 1, 6, 5, 4, 2, 3, 4, 2, 3, 3,
//       5, 4, 1, 4, 4, 5, 3, 6, 1, 5, 2, 3, 3, 6, 1, 6, 4, 1, 3,
//     ],
//     2,
//     53
//   )
// );
// console.log(missingRolls([3, 2, 4, 3], 4, 2));
// console.log(missingRolls([1, 2, 3, 4], 6, 4));
// console.log(missingRolls([6, 3, 4, 3, 5, 3], 1, 6));
// console.log(
//   missingRolls(
//     [
//       4, 5, 6, 2, 3, 6, 5, 4, 6, 4, 5, 1, 6, 3, 1, 4, 5, 5, 3, 2, 3, 5, 3, 2, 1,
//       5, 4, 3, 5, 1, 5,
//     ],
//     4,
//     40
//   )
// );
