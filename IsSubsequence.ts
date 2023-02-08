function isSubsequence(s: string, t: string): boolean {
  let p = 0;

  for (const l of t) {
    if (l == s[p]) {
      p++;
      if (p == s.length) return true;
    }
  }
  return p == s.length;
}

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
