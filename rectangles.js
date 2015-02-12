var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);


var data = buffer.toString().split('\n');

for (var i = 0; i < data.length; i++) {
	var coordinates = data[i].split(',');

	var rect1 = {
		b1: {
			x: parseInt(coordinates[0]),
			y: parseInt(coordinates[1])
		},
		b2: {
			x: parseInt(coordinates[2]),
			y: parseInt(coordinates[3]),
		}
	};

	var rect2 = {
		a1: {
			x: parseInt(coordinates[4]),
			y: parseInt(coordinates[5]),
		},
		a2: {
			x: parseInt(coordinates[6]),
			y: parseInt(coordinates[7]),
		}
	};


	console.log(checkOverlap(rect1, rect2));
};



function checkOverlap(rect1, rect2) {

	if(rect1.b1.y >= rect2.a2.y
		&& rect1.b2.y <= rect2.a1.y
		&& rect1.b2.x >= rect2.a1.x
		&& rect1.b1.x <= rect2.a2.x){

		return 'True' ;

		} else {
			return 'False';
		}

}

