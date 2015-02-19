
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       		var separated = line.split(' : ');
       		var numLine = separated[0].split(' ');
       		var code = separated[1].split(', ');
			var res = '';

       		for (var i = 0; i < code.length; i++) {
       			var num = code[i].split('-');
       			res = swapElements(numLine, num[0], num[1]);
       		};

       		console.log(res.join(' '));

    }
});

function swapElements(array, a,b) {
	array[a] = array.splice(b, 1, array[a])[0];
	return array;
}



