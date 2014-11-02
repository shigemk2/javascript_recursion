function replicate(n, x) {
  if (n <= 1) {
    return x;
  } else {
    x.push(x[0]);
    return replicate(n - 1, x);
  }
};
console.log(replicate(5,[5]));
