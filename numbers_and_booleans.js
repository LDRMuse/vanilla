// Welcome to Numbers and Booleans!

//TODO: Remember to add this file to your 'index.js' script!!
// 1. Right click on index.html and click:
//    'Reveal in Finder' - for mac
// OR 'Reveal in File Explorer' - for Windows

// 2. Double Click on index.html - which opens your local HTML file in the browser

// 3. Right click in the browser and click 'inspect' to open up your 'dev tools'

// 4. Click on 'Console' and see the console.log in action!!



// Numbers - Integer or Decimal

const wholeNumber = 3;
const decimalNumber = 5.5;
const firstNUmber = 5;
const secondNumber = 30;
const sum = firstNUmber + secondNumber;
const twoPlusTwoNumber = 2 + 2; // this will output 4
const twoPlusTwoString = `2 + 2`; // this will output "2 + 2"


// Switch out the Variable that you'd like to see displayed in the console!
//TODO: Don't forget to 'Refresh' your browser between switches!
// Feel free to add as many console.log()'s as you'd like - I used one to keep the console 'cleaner'

const changeMe = 'Change the variable in console.log() to see other variables in action!!';
console.log(changeMe);



// Booleans - True or False

// true: yes, correct, 1
// false: no, incorrect, 0

const isFun = true;
const isUncool = false;

if (isFun) {
  console.log(`Learning JavaScript is fun`)
}

// this will not log in the console because the variable is set to false!
if (isUncool) {
  console.log(`I am cool`);
};

// BUT - if we add a '!' in front of the variable, we are saying 'not'
// so if 'not' uncool then it is true
if (!isUncool) {
  console.log(`It is now true that I am cool`);
};

const age = 18
console.log(age >= 18, `You are an adult!!`);
console.log(age < 18, `You are a child...`);


