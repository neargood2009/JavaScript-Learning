Variables and Datatypes|Lecture 01
-----------------------------------------------------------

console.log - is used to log(print) a message to the console

shift + ! - html boilerplate

variables in JS
-----------------------------------------------------------
variables are containers for data

Javascript is a dynamically typed language
- not needed to specify the datatype of the variable during declaration 
- at runtime the datatype of the variable is interpreted

= assignment operator
a=b - value of b is assigned to a

vaiable rules
-----------------------------------------------------------
- variable names are case sensitive
- only letters, digits, underscore, $ is allowed
- only a letter, underscore or $ should be first character
- reserved words cannot be variable names

var, let & const 
-----------------------------------------------------------
These are the 3 choices for declaring variables in JS

var - variable can be re-declared & updated. global scope.
let - variable cannot be re-declared but can be updated. block scope.
const - variable cannot be re-declared or updated. block scope.

EcmaScipt6 ES6 standard introduced let & const in 2015
var - before ES6
let, const - after ES6


Data Types in JS
-----------------------------------------------------------
Primitive datatypes - Number, String, Boolean, Undefined, Null, BigInt, Symbol
Non-Primitive - Objects (Arrays, Functions)

Objects 
- collection of values stored as key: value pairs
- collection of variables of different datatypes

Ex:
Student
-name string
-age number
-marks number
-isPass boolean

stored as key: value pair
Student {
    name: "Rahul"
    age: 24
    ..
}

2 ways of accessing a key in object
-object.key
-object["key"]

