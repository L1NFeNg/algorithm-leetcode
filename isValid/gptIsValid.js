/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  const stack = [];
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (mapping[char] !== top) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
