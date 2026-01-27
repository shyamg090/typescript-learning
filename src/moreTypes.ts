// we get response
let response: any = "22222";

let numericLength: number = (response as string).length;

// // what if we need stringified data - forceful type ascertion

const stringifiedData: string = '{"name":"shyam is a backend developer"}';

type user = {
  name: string;
};

const responseJson = JSON.parse(stringifiedData) as user;

console.log(responseJson);
console.log(responseJson.name);

// any vs unknown example

let value: any;
value = "abc";
value = 123;
value = [1, 2, 3];
value.toUpperCase(); // no error no issues

let newValue: unknown;
newValue = "abc";
newValue = 123;
newValue = [1, 2, 3];
// newValue.toUpperCase(); // warning or error 
