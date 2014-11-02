function bswap(n, x) {
  if(n <= 0) return x;
  if(x[n] < x[n-1]) {
    var bs = x[n];
    x[n] = x[n-1];
    x[n-1] = bs;
  }
  return bswap(n - 1, x);
};

function bubble(x) {
  var n = x.length;
  if (n == 0) return x;
  bswap(n - 1, x);
  var x1 = x.shift();
  return [x1].concat(bubble(x));
};

console.log(bubble([4, 6, 9, 8, 3, 5, 1, 7, 2]));
