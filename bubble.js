function bubble(x) {
  for(var i=0; i<x.length-1; i++) {
    for(var j=x.length-1; j>i; j--) {
      if(x[j] < x[j-1]) {
        var bswap = x[j];
        x[j] = x[j-1];
        x[j-1] = bswap;
      }
    }
  }
  return x;
}

console.log(bubble([4, 6, 9, 8, 3, 5, 1, 7, 2]));
