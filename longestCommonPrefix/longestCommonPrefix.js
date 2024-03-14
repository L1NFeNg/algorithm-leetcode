function logListNode(dummyHead) {
  let current = dummyHead.next;
  console.log("=========================");
  while ( current !== null ) {
    console.log(current.val);
    current = current.next;
  }
  console.log("=========================");
}


function ListNode(val, next) {
  this.val = (val === undefined ? "" : val);
  this.next = (next === undefined ? null : next);
}

let longestCommonPrefix = function (strs) {
  const dummyHead = new ListNode();
  let current = dummyHead;
  let prefix = "";
  if (strs[0] === "") {
    console.log(prefix);
    return "";
  } else {
    console.log("字符串数组第一个字符串转出来的数组：", strs[0].split(""));
    strs[0].split("").forEach(s => {
      current.next = new ListNode(s);
      current = current.next;
    });
    logListNode(dummyHead);
    for (let i = 1; i < strs.length; i++) {
      if (dummyHead.next === null || dummyHead.next.val === "") {
        break;
      }
      current = dummyHead.next;
      let str = strs[i];
      let j = 0;
      while ( current !== null ) {
        console.log("current.val:", current.val);
        console.log("str.charAt(j):", str.charAt(j));
        if (str.charAt(j) === current.val) {
          current = current.next;
          j++;
        } else {
          current.val = "";
          current.next = null;
          break;
        }
      }
      logListNode(dummyHead);
    }
    if (dummyHead.next === null) {
      return "";
    }
    current = dummyHead;
    while ( current.next !== null ) {
      prefix += current.next.val;
      current = current.next;
    }
  }
  console.log("prefix:", prefix);
  return prefix;
};

let strs;
// strs = ["ab", "a"];
// strs = ["flower", "flow", "flight"];
strs = ["dog", "racecar", "car", "1231", "asdasd"];

longestCommonPrefix(strs);

