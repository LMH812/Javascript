var ary1 = new Array(12, 55, 43, 32, 44);
var ary2 = new Array(12, 33, 1);
Array.prototype.sum = function () {
    var output = 0;
    for (var i = 0; i < this.length; i++) {
        output += this[i];
    }
    return output;
};
console.log(new Array());
console.log(ary1.sum());
console.log(ary2.sum());
