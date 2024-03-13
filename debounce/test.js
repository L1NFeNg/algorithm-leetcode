function debounce(func, delay) {
  let timeoutId;
  const context = this;

  return function (...args) {
    console.log(context);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function myFunction() {
  console.log("函数被调用了");
}

const debouncedFunction = debounce(myFunction, 3000); // 创建一个防抖处理后的函数
debouncedFunction(); // 函数调用不会立即执行