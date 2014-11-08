function triangle(n) {
  for (var i = 1; i <= n; i++) {
    var triangle = "";
    for (var j = 0; j < i; j++) {
      triangle += "#";
    }
    console.log(triangle);
  }
}

triangle(5);
