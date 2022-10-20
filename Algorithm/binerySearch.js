function binarySearch(arr, target) {
  //index
  let left = 0;
  let right = arr.length - 1; //4
  let mid = 0;

  while (left <= right) {
    mid = Math.floor(left + right / 2); //2

    if (target === arr[mid]) return mid;

    if (arr[mid] < target) left += 1;
    else right -= 1;
  }
}
return -1;

console.log(binarySearch([1, 2, 3, 4, 5], 2));
//[1,2,3,4,5,6,7] mid = 3, target = 1
