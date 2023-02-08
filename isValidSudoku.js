/**
 * @param {character[][]} board
 * @return {boolean}
 */

const calculateN = (i, j) => {
  let x ;
  if(i <=2 ) x = '1'
  else if(i <=5 ) x = '2'
  else x = '3'

  let y ;
  if(j <=2 ) y = '1'
  else if(j <=5 ) y = '2'
  else y = '3'

  return x+y
};
const isValidSudoku = (board) => {
  const rows = {};
  const columns = {};
  const blocks = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const value = board[i][j];
      if (value != ".") {
        if (rows[i]) {
          if (rows[i].has(value)) return false;
          rows[i].add(value);
        } else rows[i] = new Set(value);
        if (columns[j]) {
          if (columns[j].has(value)) return false;
          columns[j].add(value);
        } else columns[j] = new Set(value);

        const n = calculateN(i, j);
        if (blocks[n]) {
          if (blocks[n].has(value)) return false;
          blocks[n].add(value);
        } else blocks[n] = new Set(value);
      }
    }
  }
  console.log(rows, columns, blocks);
  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
