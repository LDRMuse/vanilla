// Welcome to Variables and DataTypes!

//TODO:
// 1. Right click on index.html and click:
//    'Reveal in Finder' - for mac
// OR 'Reveal in File Explorer' - for Windows

// 2. Double Click on index.html - which opens your local HTML file in the browser

// 3. Right click in the browser and click 'inspect' to open up your 'dev tools'

// 4. Click on 'Console' and see the console.log in action!!


var variableOne = 'I am a var - Variable One';
const variableTwo = 'I am a const - Variable Two';
let variableThree = 'I am a let - Variable Three';

console.log(variableOne);
console.log(variableTwo);
console.log(variableThree);

// Variable Types are - var, const, & let

// In depth detail on these types are provided in the article below

// https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e

variableThree = 'My value has changed because I am a let variable'
console.log(variableThree)


// Values have a Type of Data stored in them

// Data Types are:
// Primitive: Strings, Numbers, Booleans, Null, Undefined
// Complex: Object, Arrays, Function

// Primitive
const stringType = 'I am a string because I am in quotes'
const numberType = 3
const booleanType = true
const nullType = null
const undefinedType = undefined

// Complex

// Objects have key/value pairs - message is key, the string is a value!
const objectType = { message: 'I am a string inside an Object!'}

// Arrays can hold Primitives and Complex data types!
const arrayType = ['I am a string inside of an Array!',
  { message: 'I am a string inside of an OBJECT inside of an ARRAY'}]

// Functions are special type of Objects!
// There are a few ways to write a function
// Below is an 'arrow function' that holds another version of a function inside - 'console.log()'

const functionType = () => {
console.log('I am a little complicated right now but I am a string inside a function')
}
// This calls the 'functionType' function - which hold a 'console.log()' function inside!
// This is why you can see the message in your console!
functionType()
