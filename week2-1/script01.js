/*const fs = require("fs");
const readOnly = fs.readFileSync(
  "/Users/rishirajchoubey/WebDev/week2-1/a.txt",
  "utf8"
);
console.log(readOnly);
const readAgain = fs.readFileSync(
  "/Users/rishirajchoubey/WebDev/week2-1/b.txt",
  "utf8"
);
console.log(readAgain);*/

function POpup(err, data) {}
const fsa = require("fs");

const showMe = fsa.readFile(
  "/Users/rishirajchoubey/WebDev/week2-1/script01.js",
  "utf-8",
  POpup
);
console.log(showMe);

//###################//

console.log("Hi there brother");

function myData() {
  console.log("Successfully executed brother");
}
console.log("WHATS UP BRO");

setTimeout(myData, 10000);
let sum = 0;
for (let i = 0; i < 1000; i++) {
  sum = sum + i;
}
console.log(sum);
