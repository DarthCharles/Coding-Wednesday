var fs  = require("fs");
var arr = [];

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		var line = line.split(';');

		var lineText = line[0].split(' ');
		var lineNumber = line[1].split(' ');
		var sentence = [];
		for (var j = 0; j < lineText.length; j++) {

			var objLine = {
				text: lineText[j],
				pos: parseInt(lineNumber[j]) -1
			};

			sentence.push(objLine);

		};
		arr.push(sentence);
	}
});




function getMissingNumbers(arr) {
	var missingNumbers = [];	
	for (var i = 0; i < arr.length; i++) {
		var cont = 0;
		var res = [];

		for (var j = 0; j < arr[i].length; j++) {		
			res[arr[i][j].pos] =  arr[i][j].pos;
		};

		for (var j = 0; j < arr[i].length; j++) {	
			if (typeof res[j] === "undefined") {
				missingNumbers.push(j)
			};
		};


	};
	return missingNumbers;
}

for (var i = 0; i < arr.length; i++) {
	var cont = 0;
	var res = [];
	var missingNumbers = getMissingNumbers(arr);
	for (var j = 0; j < arr[i].length; j++) {

		if (!isNaN(arr[i][j].pos)) {
			res[arr[i][j].pos] =  arr[i][j].text;

		} else {
			res[missingNumbers[i]] = arr[i][j].text;
		}	
	};

	console.log(res.join(' '));

};


