import { Employees } from "./interfaces";

let fname: string;

fname = "test";

console.log(fname.length);

console.log(fname.startsWith("e"));

let age: number;

age = 10;

// let result = parseInt(fname);

// console.log(result);

let isHidden: boolean = false;

console.log(isHidden);

// let employee;

// employee = "test";
// employee = 10;
// employee = ["a"];

let employee: string[];

employee = ["test", "test1", "test2", "test1"];

let employeeJoin = employee.join(",");

console.log(employeeJoin);

let emp = employee.find((emp) => emp === "tests");

let emps = employee.filter((emp) => emp === "test1");

let testEmp = employee.filter((emp) => emp.includes("test"));

console.log(emp);

console.log(emps);

console.table(testEmp);

let numbers: number[];

numbers = [2, 4, 8];

numbers.push(6);
console.log(numbers);

let sortedNumbers = numbers.sort();

console.table(sortedNumbers);

let numberOp = numbers.map((num) => num * 2).filter((num) => num > 4);

let numberSum = numberOp.reduce((a, b) => a + b);

console.table(numberOp);

console.log(numberSum);

for (let emp of employee) {
  console.log(emp);
}

numbers = [...numbers, 6];

console.log(numbers);

numbers = [6, ...numbers];
console.log(numbers);

// Array destructuring

// let emp1 = employee[0];
// let emp2 = employee[1];

// let emp3 = employee.slice(2);

// console.table(emp1);

// console.table(emp2);

// console.table(emp3);

let [emp1, emp2, ...restEmp] = employee;

console.table(emp1);

console.table(emp2);

console.table(restEmp);

const enum Color {
  Red,
  Green,
  Blue,
}

let color = Color.Blue;

let newNumbers: [firstNumber: number, secondNumber: number];

newNumbers = swap(10, 20);

newNumbers[0];
newNumbers[1];

function swap(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

type names = string | string[];

let newName: names = ["a", "b"];

type taskStatus = "In Progress" | "Open" | "Closed";

let newTask: taskStatus = "Open";

let adam: Readonly<Employees> = {
  id: 1,
  email: "test1@gmail.com",
  dob: new Date("11-Mar-1986"),
  department: "IT",
  name: "test1",
  salary: 10000,
  data: "",
};

let { email: empemail, dob: empdbo } = adam;

console.log(empemail);
console.log(empdbo);

// adam.salary = 20000;

adam = { ...adam, salary: 20000 };

// let empemail  = adam.email;
// let dob = adam.dob;

let ramesh: Partial<Employees> = {
  id: 1,
  email: "test1@gmail.com",
  dob: new Date("11-Mar-1986"),
  department: "IT",
  name: "test1",
  // salary: 10000,
  data: "",
};

type newEmployee = Pick<Employees, "email" | "dob">;

type newDepartment = Omit<Employees, 'salary' | 'dob'>;

