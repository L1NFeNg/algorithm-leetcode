function mySqrt(x) {
  if (x <= 1) {
    return x;
  }

  let left = 1;
  let right = Math.floor(x / 2);
  let result = 0;

  while ( left <= right ) {
    const mid = Math.floor((left + right) / 2);
    if (mid <= x / mid) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(mySqrt(444));