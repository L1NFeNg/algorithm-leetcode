function debounce(func, delay) {
  let timeoutId;
  return function (...arg) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, arg);
    }, delay);
  };
}