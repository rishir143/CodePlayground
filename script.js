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
