function reverse(s) {
  console.log(s);
  // let str = "";
  if (s.length <= 1) return s;
  return reverse(s.slice(1)) + s[0];
}

console.log(reverse("awesome"));

//capitalize**********************************************************************
//Zeze's code
function capitalizeFirst(arr) {
  if (!arr.length) return [];
  arr[0] = arr[0].replace(arr[0][0], arr[0][0].toUpperCase());
  return [arr[0], ...capitalizeFirst(arr.slice(1))];
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
