var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        //console.log(answer_line);
        var arrpa = line.split(',')
        var res = arrpa[0].split(' ')[arrpa[0].split(' ').length-1] == arrpa[arrpa.length-1] ? '1': '0';
        console.log(res);
    }
});
