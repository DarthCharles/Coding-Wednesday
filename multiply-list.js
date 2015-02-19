
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		var separated = line.split(' | ');

		var firstArr = separated[0].split(' ');
		var secondArr = separated[1].split(' ');
		var res = [];

		for (var i = 0; i < firstArr.length; i+=1) {
			var mult = firstArr[i] * secondArr[i];
			res.push(mult);
		};

		console.log(res.join(' '));

	}
});