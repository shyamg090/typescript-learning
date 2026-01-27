// most basic types commonly used

const phone: number = 2002002000202;
const name: string = "shyam";
const is18: boolean = true;

// union and any

let statusText: "success" | "failure" = "success"; // adding
statusText = "success";

let numbers = [0, 1, 2, 3, 4];

let current: number | undefined; // undefined added because 4 might not exist otherwise error -
// Variable 'current' is used before being assigned.ts(2454)
for (let num of numbers) {
  if (num === 4) {
    current = num;
  }
}

console.log(current);
