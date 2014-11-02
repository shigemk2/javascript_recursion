function maximum(x) {
  console.log('-----------------------');
  console.log(x);
  var x1 = x[0];
  x.splice(0,1);
  console.log(x1, x);
  console.log('-----------------------');
  if (x.length == 0) {
    return x;
  } else {
    return Math.max(x1, maximum(x));
  }
};
// console.log(Math.max(1,2));
console.log(maximum([1,2,3]));

