function convert(s, numRows) {
  if (numRows === 1) return s; // 如果只有一行，则直接返回原字符串
  const len = Math.min(s.length, numRows);
  const rows = Array.from({ length: len }, () => ""); // 创建一个长度为行数的数组，用于存放每行的字符

  let direction = false; // 用于控制 Z 字形排列的方向，初始为 false 表示向下
  let row = 0; // 当前行索引

  for (const char of s) {
    rows[row] += char; // 将字符添加到当前行
    if (row === 0 || row === numRows - 1) direction = !direction; // 到达 Z 字形的转折点时，改变方向
    row += direction ? 1 : -1; // 根据方向移动到下一行
  }

  return rows.join(""); // 将数组中的每一行连接成一个字符串
}

// 测试
const s = "PAYPALISHIRING";
const numRows = 3;
console.log(convert(s, numRows)); // 输出："PAHNAPLSIIGYIR"
