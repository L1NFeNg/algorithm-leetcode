/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
  let sign = x > 0;
  x = Math.abs(x);
  let result = 0;
  let digits = 1;
  // 计算位数
  while ( x - (x % Math.pow(10, digits)) > 0 ) {
    digits++;
  }

  for (let i = 0; digits >= 0; i++, digits--) {
    let a = Math.pow(10, i) * (Math.floor(x / Math.pow(10, digits - 1)) % 10);
    result += a;
  }
  // 处理符号
  result = result * (sign ? 1 : -1);
  // 处理取值范围
  if (result > Math.pow(2, 31) - 1 || result < -1 * Math.pow(2, 31))
    result = 0;
  return result;
};

console.log(reverse(8686123456789));