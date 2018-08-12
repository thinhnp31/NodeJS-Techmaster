'use strict';

var fs = require('fs');
var path = require('path');

var name = 'style.css';
var result = [];

var findFile = function (current, fileName) {
    if (fs.statSync(current).isDirectory()) {
        var fileList = fs.readdirSync(current);
        fileList.forEach(function(element) {
            var newPath = path.join(current,element);
            findFile(newPath, fileName);
        })
    } else {
        if (path.basename(current) === fileName) {
            result.push(current);
        }
    }
}

findFile('.',name);

if (result == '') {
    console.log("File not found!");
} else {
    result.forEach(function(element) {
        console.log(element);
    })
}