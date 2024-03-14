let map = new Map([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"]
]);


/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  let brackets = [];
  for (const bracket of s) {
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      brackets.push(bracket);
    } else {
      // console.log(bracket);
      // console.log(brackets.pop());
      if (bracket !== map.get(brackets.pop())) {
        return false;
      }
    }
  }
  return (brackets.length === 0);
};

let s;
s = "()[]{}";
console.log(isValid(s));