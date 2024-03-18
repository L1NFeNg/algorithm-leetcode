class TrieNode {
  constructor() {
    // 用于存储子节点的映射表
    this.children = {};
    // 表示当前节点是否为单词的结尾
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    // 字典树的根节点
    this.root = new TrieNode();
  }

  // 向字典树中插入一个单词
  insert(word) {
    let node = this.root;
    // 遍历单词的每个字符
    for (let char of word) {
      // 如果当前字符在子节点中不存在，则创建一个新的子节点
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      // 移动到下一个节点
      node = node.children[char];
    }
    // 标记当前节点为单词的结尾
    node.isEndOfWord = true;
  }

  // 获取字典树中的最长公共前缀
  getCommonPrefix() {
    let prefix = "";
    let node = this.root;
    // 不断沿着字典树的路径向下遍历，直到遇到一个节点有多于一个子节点或者是一个单词的结尾
    while (Object.keys(node.children).length === 1 && !node.isEndOfWord) {
      // 获取当前节点的子节点的键数组
      let childKeys = Object.keys(node.children);
      // 获取当前节点的唯一子节点的键
      let childKey = childKeys[0];
      // 添加当前子节点的键到前缀中
      prefix += childKey;
      // 移动到下一个节点
      node = node.children[childKey];
    }
    return prefix;
  }
}

// 查找字符串数组中的最长公共前缀
function longestCommonPrefix(strs) {
  // 如果数组为空，直接返回空字符串
  if (strs.length === 0) return "";

  // 创建一个字典树
  const trie = new Trie();
  // 将数组中的每个单词插入字典树
  for (let word of strs) {
    trie.insert(word);
  }

  // 返回字典树中的最长公共前缀
  return trie.getCommonPrefix();
}

// 示例用法
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); // 输出: "fl"
