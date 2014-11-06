function iswap(x) {
  return x;
}

function isort(x) {
  x.splice(0,1);
  var x1 = x[0];
  console.log(x1);
  if(x.length === 0) {
    return x1;
  } else {
    return isort(x);
  }
}
console.log(isort([4,3,5,2,1]));
