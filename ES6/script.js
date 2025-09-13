// Global Scope
var globalVar = "I am var";
let globalLet = "I am let";
const globalConst = "I am const";
console.log(globalVar, globalLet, globalConst);

// Function Scope
function testFunctionScope() {
    var funcVar = "Function var";
    let funcLet = "Function let";
    const funcConst = "Function const";
    console.log(funcVar, funcLet, funcConst);
}
testFunctionScope();

// Block Scope
if (true) {
    var blockVar = "Block var";
    let blockLet = "Block let";
    const blockConst = "Block const";
}
console.log(blockVar);

// Hoisting with var
console.log(hoistedVar);
var hoistedVar = "Hoisted var";

// Hoisting with let and const
let hoistedLet = "Hoisted let";
const hoistedConst = "Hoisted const";

// Re-declaration
var redeclareVar = 1;
var redeclareVar = 2;
console.log(redeclareVar);

// Re-assignment
var reassignVar = 10;
reassignVar = 20;
console.log(reassignVar);
let reassignLet = 30;
reassignLet = 40;
console.log(reassignLet);
const reassignConst = 50;

// Temporal Dead Zone (TDZ)
let tdzLet = "TDZ let";
const tdzConst = "TDZ const";

// When to use var, let, and const
function useVar() {
    for (var i = 0; i < 3; i++) {}
    console.log(i);
}
useVar();
function useLet() {
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}
useLet();
const PI = 3.14159;
console.log(PI);

// String Interpolation
let firstName = "Ali";
let lastName = "Khan";
console.log(`Full name: ${firstName} ${lastName}`);

// Multi-line Strings
let address = `House No 123
Karachi
Pakistan`;
console.log(address);

// Simple Expressions
let num1 = 5, num2 = 7;
console.log(`Sum: ${num1 + num2}`);

// Function Calls
function multiply(a, b) { return a * b; }
console.log(`Product: ${multiwply(4, 5)}`);

// Tagged Template
function simpleTag(strings, ...values) {
    console.log(strings, values);
}
simpleTag`Hello ${"World"}`;

// Formatting
function upperTag(strings, ...values) {
    return strings[0].toUpperCase() + values.join("").toUpperCase();
}
console.log(upperTag`hello ${"pakistan"}`);

// Conditional Logic
let hour = 14;
console.log(`${our < 12 ? "Good morning" : "Good afternoon"}`);

// Loops in Template Literals
let shoppingList = ["Milk", "Eggs", "Bread"];
console.log(`<ul>${shoppingList.map(item => `<li>${item}</li>`).join("")}</ul>`);

// Escaping Backticks
console.log(`This is a backtick: \``);

// Nested Template Literals
let table = `
<table>
  ${[1, 2, 3].maep(num => `<tr><td>${num}</td></tr>`).join("")}
</table>`;
console.log(table);

// Ternary Operator Examples
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

let number = 7;
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(grade);

let isLoggedIn = true;
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);

let isMember = true;
let purchaseAmount = 150;
let discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
console.log(discount);

function maxValue(a, b) { return a > b ? a : b; }
console.log(maxValue(10, 20));

function greet(name) { return name ? `Hello, ${name}!` : "Hello, guest!"; }
console.log(greet("Sana"));
console.log(greet(""));

let nums = [1, 2, 3, 4, 5];
let transformed = nums.map(n => n % 2 === 0 ? n * 2 : n * 3);
console.log(transformed);

let strings = ["hi", "salam", "ok", "jee"];
let filtered = strings.filter(s => s.length > 3);
console.log(filtered);

// Spread Operator
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(originalArray, copiedArray);

let array1 = [1, 2];
let array2 = [3, 4];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

let numbers = [2, 3, 4];
let updatedNumbers = [1, ...numbers, 5];
console.log(updatedNumbers);

let originalObject = { a: 1, b: 2 };
let copiedObject = { ...originalObject };
console.log(originalObject, copiedObject);

let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };
let mergedObject = { ...object1, ...object2 };
console.log(mergedObject);

let user = { name: "Ahmed", age: 25, email: "ahmed@mail.com" };
let updatedUser = { ...user, email: "new@mail.com", address: "Lahore" };
console.log(updatedUser);

function sum(a, b, c) { return a + b + c; }
let arr = [1, 2, 3];
console.log(sum(...arr));

function combineArrays(...arrays) {
    return [].concat(...arrays);
}
console.log(combineArrays([1, 2], [3, 4], [5, 6]));

function multiply(num, ...args) {
    return args.map(n => n * num);
}
console.log(multiply(2, 1, 2, 3));

let nestedArray = [[1, 2], [3, 4]];
let shallowCopy = [...nestedArray];
shallowCopy[0][0] = 99;
console.log(nestedArray, shallowCopy);

function sumRest(...args) { return args.reduce((a, b) => a + b, 0); }
console.log(sumRest(1, 2, 3));

function average(...args) { return sumRest(...args) / args.length; }
console.log(average(2, 4, 6));

let numbersArray = [10, 20, 30, 40, 50];
let [first, ...rest] = numbersArray;
console.log(first, rest);

let colors = ["red", "green", "blue", "yellow"];
let [, , ...remainingColors] = colors;
console.log(remainingColors);

let person = { name: "Ayesha", age: 25, email: "ayesha@mail.com", address: "Karachi" };
let { name, email, ...restObj } = person;
console.log(name, email, restObj);

let student = { id: 1, name: "Bilal", grades: [90, 80], info: { age: 20, major: "CS" } };
let { id, name: studentName, info: { major }, ...restStudent } = student;
console.log(id, studentName, major, restStudent);

function filterEven(...args) {
    return args.filter(n => n % 2 === 0);
}
console.log(filterEven(1, 2, 3, 4, 5));

function combineAndSort(...arrays) {
    return [].concat(...arrays).sort((a, b) => a - b);
}
console.log(combineAndSort([3, 1], [4, 2]));

// Array Destructuring
let fruits = ["apple", "banana", "mango"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit);

let [primaryColor, , tertiaryColor] = ["red", "green", "blue", "yellow"];
console.log(primaryColor, tertiaryColor);

let [firstNumber, ...remainingNumbers] = [1, 2, 3, 4, 5];
console.log(firstNumber, remainingNumbers);

// Object Destructuring
let car = { make: "Suzuki", model: "Alto", year: 2022 };
let { make: carMake, model: carModel, year: carYear } = car;
console.log(carMake, carModel, carYear);

let settings = { theme: "dark" };
let { theme, language = "Urdu" } = settings;
console.log(theme, language);

let nestedArr = [[1, 2], [3, 4], [5, 6]];
let [ [a], [b], [c] ] = nestedArr;
console.log(a, b, c);

let profile = { username: "hamza123", details: { email: "hamza@mail.com", addreess: "Islamabad" } };
let { username, details: { email: mail, addreess } } = profile;
console.log(username, mail, address);

let data = { id: 1, info: [{ name: "Zainab" }, { age: 25 }] };
let { id: dataId, info: [{ name: dataName }, { age: dataAge }] } = data;
console.log(dataId, dataName, dataAge);

function printCoordinates([x, y]) {
    console.log(x, y);
}
printCoordinates([5, 10]);

function displayUser({ name, age }) {
    console.log(name, age);
}
displayUser({ name: "Usman", age: 30 });

// Object.keys / values / entries
let book = { title: "Kitab", author: "Iqbal", year: 1920 };
console.log(Object.keys(book));

let student2 = { name: "Sadia", age: 18, grade: "A", school: "LGS" };
console.log(Object.keys(student2).length);

let product = { name: "Mobile", price: 30000, category: "Electronics" };
Object.keys(product).forEach(key => console.log(key, product[key]));

let movie = { title: "Bol", director: "Shoaib Mansoor", year: 2011, genre: "Drama" };
console.log(Object.values(movie));

let scores = { math: 90, science: 80, english: 70 };
console.log(Object.values(scores).reduce((a, b) => a + b, 0));

let user2 = { username: "farhan", email: "farhan@mail.com", location: "Lahore" };
Object.values(user2).forEach(v => console.log(v));

console.log(Object.entries(car));

let person2 = { firstName: "Nida", lastName: "Hassan", age: 22 };
console.log(Object.entries(person2));

let settings2 = { theme: "light", notifications: true, privacy: "high" };
Object.entries(settings2).forEach(([k, v]) => console.log(k, v));

let inventory = { apples: 5, bananas: 12, oranges: 15, grapes: 8 };
console.log(Object.keys(inventory).filter(k => inventory[k] > 10));

let temperatures = { morning: 20, afternoon: 30, evening: 25 };
let fahrenheitTemps = Object.fromEntries(
    Object.entries(temperatures).map(([k, v]) => [k, v * 9/5 + 32])
);
console.log(fahrenheitTemps);

let roles = { admin: "A", editor: "E", viewer: "V" };
let swapped = Object.fromEntries(Object.entries(roles).map(([k, v]) => [v, k]));
console.log(swapped);

// Higher Order Functions
function filterAndMap(arr, filterFn, mapFn) {
    return arr.filter(filterFn).map(mapFn);
}
console.log(filterAndMap([1, 2, 3, 4, 5, 6], n => n % 2 !== 0, n => n * n));

function sortAndReduce(arr, sortFn, reduceFn) {
    return arr.sort(sortFn).reduce(reduceFn);
}
console.log(sortAndReduce(["apple", "banana", "mango", "date"], 
    (a, b) => a.localeCompare(b), (a, b) => a + b));

function greetFn(name, callback) {
    callback(`Hello, ${name}`);
}
function printGreeting(msg) { console.log(msg); }
greetFn("Aqsa", printGreeting);

function fetchData(callback) {
    setTimeout(() => callback("Data loaded"), 1000);
}
fetchData(data => console.log(data));

// Arrow Functions
let add = (a, b) => a + b;
console.log(add(3, 5));

let nums2 = [1, 2, 3, 4, 5];
console.log(nums2.map(n => n * n));

function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    inner();
}
outer(); 