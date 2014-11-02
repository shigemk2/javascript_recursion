function maximum(x) {
  var x1 = x[0];
  x.splice(0,1);
  if (x.length == 0) {
    return x1;
  } else {
    return Math.max(x1, maximum(x));
  }
};
console.log(maximum([1,2,3,10,7]));
