/*
  给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
  请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
  假设每一种面额的硬币有无限个。
  题目数据保证结果符合 32 位带符号整数。
*/

/*
  输入：amount = 5, coins = [1, 2, 5]
  输出：4
  解释：有四种方式可以凑成总金额：
  5=5
  5=2+2+1
  5=2+1+1+1
  5=1+1+1+1+1
*/

/*
* 4000 1 , 2 , 5
*
* */

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const hash = {};
let change = function (amount, coins) {
  if (amount < Math.min(...coins)) {
    return 0;
  }
  if (amount === Math.min(...coins)) {
    return 1;
  }
  if (hash.hasOwnProperty(amount)) {
    return hash[amount];
  } else {
    let counts = [];
    let count = 0;
    coins.forEach(coin => {
      counts.push(change(amount - coin, coins));
    });
    counts.forEach(x => {
      count += x;
    });
    hash[amount] = count;
    return hash[amount];
  }
};

let amount, coins;
amount = 10;
coins = [1, 2, 5];
console.log(change(amount, coins));