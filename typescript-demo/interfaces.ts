export interface Address<T> {
  id: number;
  addr1?: string;
  addr2?: string;
  city?: string;
  pin?: number;
  country?: string;
  data : T;
}

let address: Address<number> = {
  id: 1,
  addr1: "Pune",
  city: "Pune",
  country: "India",
  pin: 400000,
  data : 10
};

interface Employees extends Address<string> {
  id: number;
  name: string;
  department: string;
  salary: number;
  email: string;
  dob: Date;
}


interface Department {
    id: number;
    name: string;
}


let empList: Employees[] = [
  {
    id: 1,
    email: "test1@gmail.com",
    dob: new Date("11-Mar-1986"),
    department: "IT",
    name: "test1",
    salary: 10000,
    data: '',
  },
  {
    id: 2,
    email: "test2@gmail.com",
    dob: new Date("11-Mar-1980"),
    department: "IT",
    name: "test2",
    salary: 15000,
    data : '',
  },
  {
    id: 3,
    email: "test1@gmail.com",
    dob: new Date("11-Mar-1990"),
    department: "IT",
    name: "test3",
    salary: 20000,
    data : ''
  },
];

let findEmp = empList.filter((emp) => emp.salary > 10000);

console.table(findEmp);

let salarysum = empList.map((emp) => emp.salary).reduce((a, b) => a + b);

console.log(salarysum);

export interface AddressUtil {
  add(num1: number, num2: number): number;
}

let testUnion : Employees[] | Department;

testUnion = empList;

type empIntersection = Employees & Department;

// let empType : empIntersection = {

// }
