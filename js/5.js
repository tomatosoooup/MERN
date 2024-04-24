function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();
  // Створюю рандомне число та роблю перевірку
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (error) {
    if (error instanceof NotificationException) {
      console.log("NotificationException occurred. Retrying...");
      return reliableMultiply(a, b);
    } else if (error instanceof ErrorException) {
      console.log("ErrorException occurred. Stopping.");
      throw error;
    } else {
      throw error;
    }
  }
}

console.log(reliableMultiply(8, 8));
console.log(reliableMultiply(2, 1));
console.log(reliableMultiply(2, 6));
console.log(reliableMultiply(6, 10));
console.log(reliableMultiply(73, 11));
console.log(reliableMultiply(214, 3));
console.log(reliableMultiply(0, 1));
console.log(reliableMultiply(34, 3));
