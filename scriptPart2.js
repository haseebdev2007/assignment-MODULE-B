//own biodata
const name = "HASEEB";
const fatherName = "MUHAMMAD ASHRAF";
const age = 19;
const occupation = "FRONTEND DEVELOPER";
const city = "KARACHI";
const CNIC = 4240195581201;
let education = "ENTER";
let email = "ABDULHASEEB.STD07@GMAIL.COM";
let phone = 923121051767;
let address = "JAMNAGHER MOHALLAH BALDIA TOWN KARACHI";

const biodata = `
name : ${name} <br>
fatherName : ${fatherName} <br>
age : ${age} <br>
occupation : ${occupation} <br>
city : ${city} <br>
CNIC : ${CNIC} <br>
education : ${education} <br>
email : ${email} <br>
phone : ${phone} <br>
address : ${address} <br>
`;
document.write(biodata);

// MARKSHEET
const totalMarks = 500; 
let math = 87;
let physics = 78;
let chemistry = 70;
let english = 83;
let urdu = 97;

const obtainedMarks = math + physics + chemistry + english + urdu;
const percentage = (obtainedMarks / totalMarks) * 100;

let grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "FAIL";
}
console.log("Percentage:", percentage);
console.log("Grade:", grade);

// VAR examples
var see = "HASEEB";
var see = "ABDULHASEEB"; // redeclare
console.log(see);

var x = 20;
x = 30; // reassigned
console.log(x);

console.log(meta); // hoisted (undefined)
var meta = "META AI";
console.log(meta);

function abdulHaseeb() {
  var ali = "My Name is Ali";
  console.log(ali); // fixed
}
abdulHaseeb();

var glolbalvar = "yes i am global";
function globalScope() {
   console.log("Inside function:", glolbalvar);
}
console.log(glolbalvar);
globalScope();

// LET examples
let hello = "ABDUL";
hello = "ABDULHASEEB"; // reassigned
console.log(hello);

function stronger() {
    let css = "CASCADING STYLE SHEET";
    console.log(css);
}
stronger();

let blockscope = "I AM BLOCK SCOPE";
function blockScopeExample(){
   console.log(blockscope);
}
blockScopeExample();

// CONST examples
//const cannot be reassigned
const hello2 = "ABDUL HASEEB";

console.log(hello2);

const chatgpt2 = "CHATGPT AI";
console.log(chatgpt2);
