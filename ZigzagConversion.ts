function convert(s: string, numRows: number): string {
  if (numRows == 1) return s;
  const result: any = {};
  for (let i = 0; i < numRows; i++) {
    result[i] = "";
  }

  let peak = 0;

  for (let index = 0; index < s.length; index++) {
    if (peak == 0) {
      for (let i = 0; i < numRows; i++) {
        if (s[index + i]) result[i] = result[i] + s[index + i];
      }
      index += numRows - 1;
      peak += 2;
    } else {
      if (peak == numRows) {
        peak = 0;
        index--;
        continue;
      }
      if (s[index])
        result[numRows - peak] = result[numRows - peak] + s[index];
      peak++;
    }
  }

  return Object.values(result).reduce(
    (res, value) => (res += value as string),
    ""
  ) as string;
}

// console.log(convert("PAYPALISHIRING", 4));
// console.log(convert("ABCD", 2));
console.log(convert("PAYPALISHIRING", 3));
