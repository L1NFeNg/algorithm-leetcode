function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) return reject(new TypeError("promises must be an array"));
    let results = [];
    let completed = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(result => {
        results[index] = result;
        completed++;
        if (completed === promises.length) {
          resolve(results);
        }
      }).catch(error => {
        reject(error);
      });
    });
  });
}