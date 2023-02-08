/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const [m, n] = [matrix.length, matrix[0].length];
  const Directions = {
    right: "Right",
    down: "Down",
    left: "Left",
    up: "Up",
  };
  const movements = {
    [Directions.right]: (i, j) => [i, ++j],
    [Directions.down]: (i, j) => [++i, j],
    [Directions.left]: (i, j) => [i, --j],
    [Directions.up]: (i, j) => [--i, j],
  };
  const res = [];
  let currentDirection = Directions.right;
  let [minI, minJ] = [1, 0];
  let [maxI, maxJ] = [m - 1, n - 1];
  let [i, j] = [0, 0];
  while (res.length < m * n) {
    res.push(matrix[i][j]);
    if (currentDirection == Directions.right && j == maxJ) {
      currentDirection = Directions.down;
      maxJ--;
      i++;
    } else if (currentDirection == Directions.down && i == maxI) {
      currentDirection = Directions.left;
      maxI--;
      j--;
    } else if (currentDirection == Directions.left && j == minJ) {
      currentDirection = Directions.up;
      minJ++;
      i--;
    } else if (currentDirection == Directions.up && i == minI) {
      currentDirection = Directions.right;
      minI++;
      j++;
    } else [i, j] = movements[currentDirection](i, j);
  }
  return res;
};

// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
