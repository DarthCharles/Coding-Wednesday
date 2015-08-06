function PascalRow(n){
  n++;
  var l = [];
  l.push(1);
  if (n === 0) {
    return l;
  }
  for (var i = 1; i < n; i++) {
    var tr=[];
    tr.push(l[0]);

    for (var j = 1; j < i; j++) {
      tr.push(l[j-1] + l[j]);
    }
    tr.push(l[0]);
    l = tr;
  }

  return l;

}



PascalRow(process.argv[2]);
