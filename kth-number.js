function extractEachKth(k) {
var inputArray = [1,2,3,4,5,6,7,8,9,10];
  var result = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (((i + 1) % k) !== 0) {
      result.push(inputArray[k]);
    }
  }
  return result;
}

console.log(extractEachKth(process.argv[2]));
