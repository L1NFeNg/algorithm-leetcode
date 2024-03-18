// 节流（throttling）是一种常见的优化技术，用于限制函数的调用频率。
function throttle(func, delay) {
  let lastCall = 0; // 记录上次函数调用的时间戳

  return function (...args) {
    const now = new Date().getTime(); // 获取当前时间戳
    if (now - lastCall < delay) { // 如果距离上次调用的时间小于延迟时间，则直接返回
      return;
    }

    lastCall = now; // 更新上次调用的时间戳为当前时间
    func.apply(this, args); // 调用原始函数，并传递参数
  };
}

// 示例用法
function myFunction() {
  console.log("Function called");
}

const throttledFunction = throttle(myFunction, 1000); // 限制为每1000毫秒调用一次

// 连续调用myFunction
throttledFunction(); // 输出: "Function called"
throttledFunction(); // 不会输出
throttledFunction(); // 不会输出

// 在1000毫秒后再次调用
setTimeout(throttledFunction, 1000); // 输出: "Function called"
