
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		var digits = [];
		for (var i = 0; i < line.length; i++) {
			if (isNumber(line[i])) {
				digits.push(getArray(line[i]));
			}			
		};
		var bigNumLine = '', j = 0;
		while(j < 6) {
			for (var i = 0; i < digits.length; i++) {		
				bigNumLine += digits[i][j];	
			};
			console.log(bigNumLine);
			bigNumLine = ''; j++;
		}
	}
});

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function getArray(num) {
	switch(num) {

		case '0':
		var _0 = ['-**--','*--*-','*--*-','*--*-','-**--','-----'];	
		return _0;
		break;

		case '1':
		var _1 = ['--*--','-**--','--*--','--*--','-***-','-----'];
		return _1;
		break;

		case '2':
		var _2 = ['***--','---*-','-**--','*----','****-','-----'];
		return _2;
		break;

		case '3':
		var _3 = ['***--','---*-','-**--','---*-','***--','-----'];
		return _3;
		break;

		case '4':
		var _4 = ['-*---','*--*-','****-','---*-','---*-','-----'];	
		return _4;
		break;

		case '5':		
		var _5 = ['****-','*----','***--','---*-','***--','-----'];
		return _5;
		break;

		case '6':
		var _6 = ['-**--','*----','***--','*--*-','-**--','-----'];
		return _6;
		break;

		case '7':
		var _7 = ['****-','---*-','--*--','-*---','-*---','-----'];
		return _7;
		break;

		case '8':
		var _8 = ['-**--','*--*-','-**--','*--*-','-**--','-----'];
		return _8;
		break;

		case '9':		
		var _9 = ['-**--','*--*-','-***-','---*-','-**--','-----'];
		return _9;
		break;

		default:
		return true;
	}
}



