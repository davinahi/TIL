const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(" ");

const solution = (arr) => {
  const newArr = [];
  for (let i = 1; i <= arr[0]; i++) {
    if (arr[0] % i === 0) {
      newArr.push(i);
    }
  }
  // if (input[1] > newArr.length) return 0;
  if (input[1] > newArr.length) console.log(0);
  // return input[1];
  console.log(input[1]);
};

console.log(solution(input));
