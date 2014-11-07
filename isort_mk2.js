function insert(x, xs) {
  if (x) {
    return x;
  }
}

function isort(x) {
  var n = x.length;
  if(n <= 1) return x;
  var x1 = x.shift(x);
  var x2 = x.shift(x);
  return [x1, x2].concat(isort(x));
}
console.log(isort([4,3,5,2,1]));
