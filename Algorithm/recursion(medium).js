function reverse(s) {
  console.log(s);
  // let str = "";
  if (s.length <= 1) return s;
  return reverse(s.slice(1)) + s[0];
}

console.log(reverse("awesome"));
