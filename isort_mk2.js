function insert(x, xs) {
  if(xs.length <= 0) {
    return [x];
  }
  var y = xs.shift();
  if (x < y) {
    return [x].concat([y].concat(xs));
  } else {
    return [y].concat(insert(x, xs));
  }
}

function isort(xs) {
  if (xs.length <= 0) return xs;
  var x = xs.shift();
  return insert(x, isort(xs));
}
console.log(isort([4,3,5,2,1]));
