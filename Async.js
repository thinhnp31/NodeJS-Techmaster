/*
var add = function(a, b, callback) {
    if (isNaN(a) || isNaN(b)) {
        callback("Invalid Input", null);
    } else {
        callback(null, a + b);
    }
}

add(1, 'a', function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});*/

setTimeout(function () {
    console.log("Finish Waiting");
}, 0);

console.log("Something happens!");