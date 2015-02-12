fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var text = buffer.toString().split('\n');

for (var i = 0; i < text.length; i+=1) {
	var linea = text[i].split(',');
	var arr = [];
	var actual = linea[0];
	for (var j = 0; j < linea.length; j+=1) {

		if (actual !== linea[j+1]) {
			arr.push(actual)
			actual = linea[j+1]
		};

	};
	console.log(arr.join(','));
};


