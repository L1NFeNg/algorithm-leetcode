/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
  const trimS = s.trim();
  let wordLength = 0;
  for (let i = trimS.length - 1; i >= 0; i--) {
    if (trimS[i] === " ") {
      break;
    } else {
      wordLength++;
    }
  }
  return wordLength;
};

let s;
// s = "Hello World"
// s = "   fly me   to   the moon  "
s = "luffy is still joyboy";
console.log(lengthOfLastWord(s));