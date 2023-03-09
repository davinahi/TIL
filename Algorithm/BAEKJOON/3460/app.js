let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n")
  .map(Number);

const solution = (n) => {
  // const arr = [];
  // for (i = 0; i < n.length; i++) {
  //   const binary = n[i].toString(2);
  //   const result = [...binary].reverse();
  //   console.log(result);

  //   for (let i = 0; i < result.length; i++) {
  //     if (result[i] === "1") {
  //       arr.push(i);
  //       console.log(i, "asdasdads");
  //     }
  //   }
  // }
  // return arr.slice(1).join(" ");
  input.shift();
  const arr = [];

  for (i = 0; i < n.length; i++) {
    const binary = n[i].toString(2);
    const result = [...binary].reverse();

    for (let i = 0; i < result.length; i++) {
      if (result[i] === "1") {
        arr.push(i);
      }
    }
  }
  console.log(arr.join(" "));
  return;
};

console.log(solution(input));
