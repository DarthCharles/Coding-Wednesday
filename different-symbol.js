function differentSymbolsNaive(s) {
  var result = 0;
  for (var i = 0; i < 26; i++) {
    var found = true;
    for (var j = 0; j < s.length; j++) {   
      if (s[j] === String.fromCharCode(97 + i)) {
        result++; 
        break;
      }
    }
  }
  return result;
}

differentSymbolsNaive('cabca');