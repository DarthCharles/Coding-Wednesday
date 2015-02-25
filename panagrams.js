var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {

    var abc = {
     a: {letter: 'a',
     appears: 0},
     b: {letter: 'b',
     appears: 0},
     c: {letter: 'c',
     appears: 0},
     d: {letter: 'd',
     appears: 0},
     e: {letter: 'e',
     appears: 0},
     f: {letter: 'f',
     appears: 0},
     g: {letter: 'g',
     appears: 0},
     h: {letter: 'h',
     appears: 0},
     i: {letter: 'i',
     appears: 0},
     j: {letter: 'j',
     appears: 0},
     k: {letter: 'k',
     appears: 0},
     l: {letter: 'l',
     appears: 0},
     m: {letter: 'm',
     appears: 0},
     n: {letter: 'n',
     appears: 0},
     o: {letter: 'o',
     appears: 0},
     p: {letter: 'p',
     appears: 0},
     q: {letter: 'q',
     appears: 0},
     r: {letter: 'r',
     appears: 0},
     s: {letter: 's',
     appears: 0},
     t: {letter: 't',
     appears: 0},
     u: {letter: 'u',
     appears: 0},
     v: {letter: 'v',
     appears: 0},
     w: {letter: 'w',
     appears: 0},
     x: {letter: 'x',
     appears: 0},
     y: {letter: 'y',
     appears: 0},
     z: {letter: 'z',
     appears: 0},
   }


   for (var i = 0; i < line.length; i++) {
     for (var prop in abc) {
      if (abc[prop].letter === line[i].toLowerCase())
        abc[prop].appears = 1;           
    };
  };

  var res = '';
  for (var prop in abc) {
    if (abc[prop].appears === 0)      
      res += abc[prop].letter;          
  };

  var resu = (res.length > 0) ? res : 'NULL';
  console.log(resu);
}


});




