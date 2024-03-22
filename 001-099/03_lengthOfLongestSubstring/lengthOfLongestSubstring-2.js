/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let strArray = s.split("");
  const strAtHash = {}; // {hash:number,lastIndex:number}
  let currLongest = 0;
  let left = 0;

  for (let i = 0; i < strArray.length; i++) {
    left = strAtHash[strArray[i].charCodeAt(0)] || 0;
    console.log("left:", left);
    if (strAtHash.hasOwnProperty(strArray[i].charCodeAt(0))) {
      if (currLongest > longest) longest = currLongest;
      let deleteCount = 0;
      for (let key in strAtHash) {
        if (strAtHash.hasOwnProperty(key) && strAtHash[key] <= left) {
          delete strAtHash[key];
          deleteCount++;
        }
      }
      console.log("重复currLongest:", currLongest);
      currLongest = currLongest - deleteCount + 1;
    } else {
      currLongest++;
      console.log("不重复currLongest:", currLongest);
      if (currLongest > longest) longest = currLongest;
    }
    strAtHash[strArray[i].charCodeAt(0)] = i;
    console.log(strAtHash);
    console.log("=================================");
  }

  console.log("longest:", longest);
  return longest;
};

lengthOfLongestSubstring("abcabcbb");