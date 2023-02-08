/**
 * @param {number} rowIndex
 * @return {number[]}
 */

const nextRow = (arr) => {
  return arr.reduce(
    (acc, value, index) => {
      acc.push(value + (arr[index + 1] || 0));
      return acc;
    },
    [1]
  );
};
var getRow = function (rowIndex) {
  let result = [1];
  let i = 1;
  while (i <= rowIndex) {
    result = nextRow(result);
    i++;
  }
  return result;
};
