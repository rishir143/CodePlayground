function solve(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Age >= 20 && arr[i].Gender === "Male") {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

const users = [
  {
    Name: "Rishi",
    Age: 22,
    Gender: "Male",
  },
  {
    Name: "Priya",
    Age: 18,
    Gender: "Female",
  },
  {
    Name: "Sarthak",
    Age: 12,
    Gender: "Male",
  },
];
let ans = solve(users);
console.log(ans);

function sumTwoNum(a, b) {
  return parseInt(a) + parseInt(b);
}
console.log(sumTwoNum(5, 5));
console.log(sumTwoNum(5, "5")); //parse Method

function SumNum(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(SumNum(10));
