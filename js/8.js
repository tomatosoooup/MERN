// Стоврюю метод для строк
String.prototype.removeDuplicate = function () {
  // Перетворюю строку на массив
  const arrayFromString = this.split(" ");
  // Видаляю повторення завдяки чудовому об'єкту Set :)
  const matches = Array.from(new Set(arrayFromString));
  // Повертаю до строки
  return matches.join(" ");
};

let x =
  "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double Set Set WeakMap WeakSet Float Float2";
console.log(x.removeDuplicate());
// Int32 Double Set WeakMap WeakSet Float Float2
