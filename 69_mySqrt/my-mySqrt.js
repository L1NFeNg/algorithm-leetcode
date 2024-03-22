/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
  if (x === 1 || x === 0) return x;
  let right = Math.floor(x / 2);
  let left = 1;
  return find(left, right, x);
};

let find = function (l, r, x) {
  let mid_l = Math.floor((l + r) / 2);
  let mid_r = mid_l + 1;
  if (l * l <= x && (l + 1) * (l + 1) > x) {
    return l;
  }
  if (r * r <= x && (r + 1) * (r + 1) > x) {
    return r;
  }
  if (mid_l * mid_l <= x && mid_r * mid_r > x) {
    return mid_l;
  }
  if (mid_l * mid_l < x) {
    return find(mid_l, r, x);
  }
  if (mid_l * mid_l > x) {
    return find(l, mid_l, x); 
  }
};

console.log(mySqrt(1));
console.log(mySqrt(2));
console.log(mySqrt(3));
console.log(mySqrt(4));
console.log(mySqrt(444));
console.log(mySqrt(444));
