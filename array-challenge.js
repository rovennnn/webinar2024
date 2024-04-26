const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("EVEN NUMBERS:");
for (let num of arr) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

console.log("\nODD NUMBERS:");
for (let num of arr) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}
