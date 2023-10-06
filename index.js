// Iteration 1: Names and Input

let hacker1 = "Jorge";
    console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Santos";
    console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.` )
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length characters.}`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`)
};


// Iteration 3: Loops

const splittedString = hacker1.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();

console.log(upperCaseStringWithSpaces);

let reversed = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  reversed += hacker1[i];
}

console.log(reversed);