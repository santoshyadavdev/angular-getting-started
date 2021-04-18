// named function
function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(1, 1));

console.log(add(1, 1, 5));

// function expression
const sub = function (num1: number, num2: number, num3 = 2): number {
  return num1 - num2 - num3;
};

console.log(sub(10, 5));

console.log(sub(100, 5, 10));

// arrow function
const mul = (num1: number, num2: number) => num1 * num2;

console.log(mul(10, 5));

// type addition<T> = (num1: T, num2: T) => T;

// let addNumber : addition<number>;

//  addNumber()

// function addition<T>(num1: T , num2: T) : T {

// }

