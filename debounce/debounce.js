/**
 * 防抖函数
 * @param {Function} func - 要执行的函数
 * @param {number} delay - 等待时间（毫秒）
 * @returns {Function} - 返回一个经过防抖处理后的函数
 */
function debounce(func, delay) {
  let timeoutId; // 用于存储定时器ID

  // 返回一个函数，该函数将会在指定时间内执行
  return function (...args) {
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
  console.log("函数被调用了");
}

const debouncedFunction = debounce(myFunction, 3000); // 创建一个防抖处理后的函数
debouncedFunction(); // 函数调用不会立即执行
// 1秒后，函数才会执行


/*
  在上述代码中使用 apply 的原因是为了确保函数在执行时保留了正确的上下文（即 this 指向）。
  在 JavaScript 中，函数的 this 上下文是在函数被调用时确定的。
  由于 debounce 函数返回的是一个新的函数，而不是原始函数本身，
  因此需要确保在新函数中执行传入的原始函数时，能够正确地绑定原始函数的上下文。
  使用 apply 的目的是在新函数内部调用原始函数，并将原始函数的上下文（this）设置为正确的值，
  即调用 debounce 函数时传入的上下文。
  这样做可以确保在调用原始函数时，它在执行时的上下文与调用 debounce 函数时的上下文保持一致。
  因此，通过 apply 方法，我们能够确保在执行原始函数时，它的上下文与调用 debounce 函数时传入的上下文保持一致。
*/
