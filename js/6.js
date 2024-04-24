function findMinAndMultiply(matrix) {
  // Вказав саме Infinity тому що матриця може буде дуже великою та значення в ній також можуть бути достатньо великими
  let min = Infinity;
  for (let row of matrix) {
    // Звичайний цикл в циклі з присвоєнням мінімального значення числом що менше за початкове
    for (let num of row) {
      if (num < min) {
        min = num;
      }
    }
  }

  //   Тут я проходжу по двомірному массиву і перемножую всі непарні числа або повертаю просто число якщо воно парне
  const result = [];
  for (let row of matrix) {
    const newRow = [];
    for (let num of row) {
      newRow.push(num % 2 !== 0 ? num * min : num);
    }
    result.push(newRow);
  }

  return result;
}

const matrix = [
  [5, 9, 6],
  [7, 11, 19],
  [15, 9, 4],
  [20, 3, 9],
  [25, 32, 17],
  [1, 7, 0],
];

console.log(findMinAndMultiply(matrix));
