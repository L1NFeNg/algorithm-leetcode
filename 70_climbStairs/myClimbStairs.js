/**
 * @param {number} n
 * @return {number}
 */
const hash = {};
let climbStairs = function (n) {
  if (n === 1 || n === 2 || n === 3) {
    return n;
  } else if (hash.hasOwnProperty(n)) {
    return hash[n];
  } else {
    hash[n] = climbStairs(n - 2) + climbStairs(n - 1);
    return hash[n];
  }
};
