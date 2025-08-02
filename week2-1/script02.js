/*class Rectangle {
  constructor(length, width, color) {
    this.width = width;
    this.length = length;
    this.color = color;
  }
  area() {
    return this.width * this.length;
  }
  paint() {
    console.log(`Color of the Rectsngle is ${this.color}`);
  }
}

const rect = new Rectangle(4, 5, "blue");
const ans = rect.area();
const Show = rect.paint();
console.log(ans);*/

/*const map = new Map();
map.set("Name", "Rishi");
map.set("Age", 20);
console.log(map.get("Name"));

const time = new Date();
console.log(time.getFullYear());
console.log(time.getSeconds()); */

//******************************** //

/*function callBack(resolve) {
  // console.log(resolve);
  setTimeout(resolve, 3000);
}

function setTimeoutPromisified() {
  return new Promise(callBack);
}

function main() {
  console.log("successfully called");
}
setTimeoutPromisified().then(main);*/

////////////00000000

/*function deleteSpace() {
  console.log("hello there");
}
const fs = require("fs");

const cleanSpace = fs
  .cleanFile("/Users/rishirajchoubey/WebDev/week2-1/a.txt", "utf-8")
  .then(deleteSpace);*/

/// ********************

// const fs = require("fs");
// function readTheFile(resolve) {
//   fs.readFile(
//     "/Users/rishirajchoubey/WebDev/week2-1/b.txt",
//     "utf-8",
//     function (err, data) {
//       resolve(data);
//     }
//   );
// }

// function readFile(fileName) {
//   return new Promise(readTheFile);
// }
// function callBack(content) {
//   console.log(content);
// }

// readFile("a.txt").then(callBack);

/*Econst fs = require("fs");

function Gotit(resolve) {
  fs.readFile(
    "/Users/rishirajchoubey/WebDev/week2-1/b.txt",
    "utf-8",
    function (err, data) {
      resolve(data);
    }
  );
}

function readFile() {
  return new Promise(Gotit);
}

function callback(content) {
  console.log(content);
}

readFile().then(callback);*/

//////////***********************************/

class Promise2 {
  constructor(fn) {
    function callMe() {
      this.resolve();
    }
    fn(callMe);
  }

  then(funCallback) {
    this.resolve = funCallback;
  }
}

function ReadMe(resolve) {
  setTimeout(() => {
    console.log("hi there");
  }, 3000);
}

function setTimeoutPromisified() {
  return new Promise2(ReadMe);
}

// function setTimeoutPromisified(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
//   resolve();
// }
function callback() {
  console.log("I'm done with you all");
}

setTimeoutPromisified(1000).then(callback);

// querySelectorAll
// getElementById
// getElementsByClassName
