//Mimic the functionality of Maht.pow() with the recursion
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 2));
console.log(power(6, 3));
console.log(power(7, 0));

//factorial
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

//Returns the product of them all which takes in an array
const productOfArray = (arr) => {
  let newArr = [];
  if (arr.length === 0) return 1;
  newArr = arr[0];
  arr = arr.slice(1);

  return newArr * productOfArray(arr);
};

console.log(productOfArray([1, 2, 3]));
