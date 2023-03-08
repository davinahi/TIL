const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const inputArr = input[1].split(" ").map(Number);
const ranges = input.slice(2).map((item) => item.split(" ").map(Number));
console.log(ranges);

const solution = (inputArr, ranges) => {
  const sumArr = Array.from({ length: inputArr.length + 1 }, () => 0);
  console.log(sumArr, "🔥", inputArr);
  let answer = [];

  inputArr.forEach((el, i) => {
    console.log(sumArr[i + 1], sumArr[i], el, "🟢", sumArr);
    sumArr[i + 1] = sumArr[i] + el;
  });

  ranges.forEach((range) => {
    answer.push(sumArr[range[1]] - sumArr[range[0] - 1]);
    console.log(sumArr[range[1]], "🐙", sumArr[range[0] - 1]);
  });

  console.log(answer.join("\n"), "🐣");
};

solution(inputArr, ranges);
