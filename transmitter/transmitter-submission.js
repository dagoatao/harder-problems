process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function hackerlandRadioTransmitters(x, k) {
    // Complete this function
    // Complete this function
    const sortNumber = (a,b) => a-b;
    x.sort(sortNumber);
    var placements = 0;
    var houses = [];
    var i = 0;
    var n = x.length;
    while(i<n) {
     houses.push(x[i]);
     placements++;
     var loc = x[i]+k;
     while(i<n && x[i]<=loc) i++;
     loc=x[--i]+k;
     while(i<n&&x[i]<=loc) i++;
    }
    //console.log(houses);
    //console.log(placements);
    return placements;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    x = readLine().split(' ');
    x = x.map(Number);
    var result = hackerlandRadioTransmitters(x, k);
    process.stdout.write("" + result + "\n");

}
