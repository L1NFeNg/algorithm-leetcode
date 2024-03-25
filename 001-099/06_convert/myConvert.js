/*
  将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

  比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

  P   A   H   N
  A P L S I I G
  Y   I   R
  之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

  请你实现这个将字符串进行指定行数变换的函数：

  string convert(string s, int numRows);
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function (s, numRows) {
  if (numRows === 1) return s;
  let array = [];
  let result = "";

  for (let i = 0; i <= numRows - 1; i++) {
    array.push([]);
  }

  let k = 0;
  let yu = (numRows - 1) * 2;

  for (let j = 0; j < s.length; j++) {
    array[k].push(s[j]);
    if (j % yu < numRows - 1) {
      k++;
    } else {
      k--;
    }
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result += array[i][j];
    }
  }

  return result;
};