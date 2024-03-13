/**
 * 防抖函数
 * @param {Function} func - 要执行的函数
 * @param {number} delay - 等待时间（毫秒）
 * @returns {Function} - 返回一个经过防抖处理后的函数
 */
function debounce(func, delay) {
  let timeoutId; // 用于存储定时器ID

  // 返回一个函数，该函数将会在指定时间内执行
  return function(...args) {
    const context = this; // 保存函数执行时的上下文
    // 如果已经存在定时器，则清除它
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // 设置一个新的定时器，以延迟执行传入的函数
    timeoutId = setTimeout(() => {
      func.apply(context, args); // 执行传入的函数
    }, delay);
  };
}

// 示例用法：
function myFunction() {
  console.log('函数被调用了');
}

const debouncedFunction = debounce(myFunction, 3000); // 创建一个防抖处理后的函数
debouncedFunction(); // 函数调用不会立即执行
// 1秒后，函数才会执行
