async function bulkRun(tasks) {
  const results = [];

  for (const [func, args] of tasks) {
    const result = await new Promise((resolve) => {
      func(...args, (result) => resolve(result));
    });
    results.push(result);
  }

  return results;
}

// Приклад використання:
const f1 = (cb) => {
  cb(4);
};
const f2 = (a, cb) => {
  cb(a);
};
const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
  [f1, []],
  [f2, [7]],
  [f3, [3, 4]],
])
  .then(console.log)
  .catch(() => console.log("Something went wrong :c"));
