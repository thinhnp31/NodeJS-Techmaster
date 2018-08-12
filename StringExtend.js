String.prototype.reverse = function() {
    let result = "";

    for (let i = this.length - 1; i >= 0; i--) {
        result += this.charAt(i);
    }

    return result;
}

String.prototype.camelcase = function() {
    let result = "";
    let prevChar = "";

    for (let i = 0; i < this.length; i++) {
        if (i === 0 || prevChar === " ") {
            result += this.charAt(i).toUpperCase();
        } else {
            result += this.charAt(i);
        }
        prevChar = this.charAt(i);
    }

    return result;
}

module.exports = String;