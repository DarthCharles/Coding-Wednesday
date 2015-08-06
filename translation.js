var fs  = require("fs");
var l = [];
var a = 'abcdefghijklmnopqrstuvwxyz';
var na = 'ynficwlbkuomxsevzpdrjgthaq';

for (var i = 0; i < a.length; i++) {
  l[na[i]] = a[i]
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var res = '';

  for (var i = 0; i < line.length; i++) {

    if (typeof l[line[i]] !== "undefined") {
      res += l[line[i]];
    } else {
      res += ' ';
    }
  }
  console.log(res);

});
