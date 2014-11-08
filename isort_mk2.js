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

function isort(x) {
  if(x.length <= 0) {
    return x;
  }
  return insert(x.shift(), (isort(x)));
}
console.log(isort([4,3,5,2,1]));
