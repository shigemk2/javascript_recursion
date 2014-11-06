function isort(x) {
  for (var i = 1; i < x.length; i++) {
    var tmp = x[i];
    if (x[i - 1] > tmp) {
      var j = i;

      while (j > 0 && x[j - 1] > tmp) {
        x[j] = x[j - 1];
        // console.log("tmp: ", tmp, "x[j]: ", j, x[j]);
        j--;
      }
      x[j] = tmp;
    }
  }
  return x;
}
console.log(isort([4,3,5,2,1]));
// console.log(isort([8,4,3,7,6,5,2,1]));
