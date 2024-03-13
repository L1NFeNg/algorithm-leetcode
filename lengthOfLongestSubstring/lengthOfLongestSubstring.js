/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let strArray = s.trim("");


  const strAtHash = {};

  let left = 0;
  let right = 0;

  for (let i = 0; i < strArray.length; i++) {

    let currLongest = 0;
    if (!strAtHash.hasOwnProperty(strArray.charCodeAt(i))) {
      right++;
      currLongest++;
    } else {
      strAtHash[strArray.charCodeAt(i)] = i;
      left++;
      currLongest--;
    }
    console.log(`currLongest-${i}-${strArray[i]}:`,currLongest);
    if (currLongest > longest) longest = currLongest;
  }

  console.log("longest:",longest);
  return longest;
};

lengthOfLongestSubstring("abcabcbb");