function promiseAll(promises) {
  // 返回一个新的 Promise 对象
  return new Promise((resolve, reject) => {
    // 检查传入的参数是否为数组
    if (!Array.isArray(promises)) {
      // 如果不是数组，则拒绝并返回一个类型错误
      return reject(new TypeError("promises must be an array"));
    }

    // 初始化一个数组来存储每个 Promise 的结果
    let results = [];
    // 记录已完成的 Promise 数量
    let completed = 0;

    // 对传入的 Promise 数组进行遍历
    promises.forEach((promise, index) => {
      // 使用 Promise.resolve() 方法确保传入的值是一个 Promise
      Promise.resolve(promise).then((result) => {
        // 将每个 Promise 的结果存储到 results 数组中
        results[index] = result;
        // 增加已完成的 Promise 数量
        completed++;

        // 当所有 Promise 都成功完成时，将结果传递给新 Promise 的 resolve 函数
        if (completed === promises.length) {
          resolve(results);
        }
      }).catch((error) => {
        // 如果任何一个 Promise 失败，则立即拒绝并返回失败的原因
        reject(error);
      });
    });
  });
}

// 示例用法
let promise1 = Promise.resolve(1);
let promise2 = new Promise((resolve) => setTimeout(resolve, 100, 2));
let promise3 = new Promise((resolve, reject) => setTimeout(reject, 50, "error"));

promiseAll([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // 输出 [1, 2, "error"]
  })
  .catch((error) => {
    console.error(error);
  });
