function side(n, t) {
  if(n <= 0) return t;
  t += "#";
  return side(n - 1, t);
}

function triangle(n) {
  if (n <= 0) return;
  var t = "";
  console.log(side(n, t));
  triangle(n - 1);
}
triangle(5);
