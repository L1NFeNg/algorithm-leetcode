// 创建一个空的 Set
let mySet = new Set();

// 添加元素
mySet.add(1);
mySet.add(2);
mySet.add(3);

// 使用迭代器遍历集合中的元素
for (let item of mySet) {
  console.log(item);
}
console.log("===========================");
// 删除元素
mySet.delete(2);


// 使用迭代器遍历集合中的元素
for (let item of mySet) {
  console.log(item);
}

console.log("===========================");

// 检查元素是否存在
console.log(mySet.has(1)); // 输出 true

// 获取集合大小
console.log(mySet.size); // 输出 2

// 使用迭代器遍历集合中的元素
for (let item of mySet) {
  console.log(item);
}

// 清空集合
mySet.clear();
