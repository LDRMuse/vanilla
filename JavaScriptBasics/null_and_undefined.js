// Welcome to Null and Undefined!!

//TODO: Remember to add this file to your 'index.js' script!!
// 1. Right click on index.html and click:
//    'Reveal in Finder' - for mac
// OR 'Reveal in File Explorer' - for Windows

// 2. Double Click on index.html - which opens your local HTML file in the browser

// 3. Right click in the browser and click 'inspect' to open up your 'dev tools'

// 4. Click on 'Console' and see the console.log in action!!


// Null - only has one value: null (empty or unknown)

let age = null;
console.log(age);

age = 20;
console.log(age, 'Can you tell what happened? At first we declared age to hold the data value "null". Then we declared age to hold the data value "20". This change was only allowed because we used "let" instead of "const" Pretty neat, right?');

// Undefined - a variable that has not been assigned a value.
// The variable is declared but a value has not been given to that variable
// We can only declare a variable with an undefined value by using 'let' or 'var'
// This is because 'let' and 'var' variables are allowed to change and 'const' is not

var apple;
console.log(apple, 'A "var" or "let" variable declared as "apple" that has not been assigned a value - making it undefined');
apple = "yummy"
console.log(apple, 'This variable "apple" has been assigned a string value, "yummy"');

