var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    //do something here
    //console.log(answer_line);
    var  first_array = line.split(',')[0].trim().split('').reverse().join('');
    var  second_array = line.split(',')[1].trim().split('').reverse().join('');

    console.log(check_coincidences(first_array, second_array));

  }
});


function check_coincidences(arr1, arr2) {
  res = arr1.indexOf(arr2) > -1 ? 1 : 0;
  return res;
}
