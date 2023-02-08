/**
 * @param {character[][]} grid
 * @return {number}
 */

const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i]?.[j] != "1"
  )
    return;

  grid[i][j] = "0"
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
};

var numIslands = function (grid) {
  let count = 0;

  for (const i in grid) {
    for (const j in grid[0]) {
      if (grid[i]?.[j] == "1") {
        count++;
        dfs(grid, +i, +j);
      }
    }
  }

  return count;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));
