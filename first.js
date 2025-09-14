console.log("Welcome to first.js");
console.log("Pascoala Dsouza");
console.log("This is javascript");

// different datatypes that can be stored in variables
fullName = "Tony Stark";
age = 24;
price = 99.99;
x = null;
y = undefined;
isFollow = true;
console.log(isFollow);


/* examples on variable naming conventions
 variable names are case sensitive
 letters, digits, underscore, $ is allowed
 only a letter, underscore or $ should be first character
 reserved words cannot be variable names
 */

// full.Name = "Tony Stark"; // Uncaught ReferenceError: full is not defined
// full-name1 = "Tony Stark"; Uncaught SyntaxError: Invalid left-hand side in assignment
FULLNAME = "Emily Parker";
console.log(fullName);
console.log(FULLNAME);


firstName = "Tony";
_firstName = "Tony";
$firstName = "Tony";
// 1firstName = "Tony"; // Uncaught SyntaxError: Invalid or unexpected token


// console = "Tony Stark";
// console.log(console); // Uncaught TypeError: console.log is not a function
Console = "Print Console";
console.log(Console);

// fullName - camelCase ( recommended case )
// fullname
// full_name - snake_case
// FullName - PascalCase
// FULLNAME - UPPERCASE
// full-name - kebab-case (not supported in JS)

// var - variable can be re-declared & updated. global scope.
var fullName = "Pascoala Dsouza";
console.log(fullName);

var age = 24;
var age = 59;
var age = 86;
console.log(age);

// let - variable cannot be re-declared but can be updated. block scope.
let _age = 24;
// let _age = 59; // Cannot redeclare block-scoped variable '_age'
// let _age = 86; // Cannot redeclare block-scoped variable '_age'
_age = 59;
_age = 86;
console.log(age);


// const - variable cannot be re-declared or updated. block scope.
const PI = 3.14;
// const PI = 59; // Cannot redeclare block-scoped variable 'PI'.
// PI = 3.14; // Uncaught TypeError: Assignment to constant variable.
console.log(PI);


// initialization
let a; 
console.log(a);

//const b; // Uncaught SyntaxError: Missing initializer in const declaration
// const - needs to be initialized during declaration
const b = 100;
console.log(b);


// block scope
{
    let a = 5;
    console.log(a);
}

{
    let a = 10;
    console.log(a)
}

