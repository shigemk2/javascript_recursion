function bswap(n, x) {
  if(n <= 1) return x;
  if(x[n] < x[n-1]) {
    var bs = x[n];
    x[n] = x[n-1];
    x[n-1] = bs;
  }
  return x;
};

function bubble(x) {
  console.log(x);
  var n = x.length;
  if (x.length == 0) return x;
  x.shift();
  // return bubble(bswap(n - 1, x));
  return bubble(x);
};

console.log(bubble([4, 6, 9, 8, 3, 5, 1, 7, 2]));
