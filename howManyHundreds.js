const numbers = [
  [1000, 894, 520, 99, 0]
]
let howManyHundreds = function (numbers) {
return Math.floor(numbers / 100)
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);