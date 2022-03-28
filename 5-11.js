Function.prototype.inherits = function (superCtor) {
    Object.setPrototypeOf(this.prototype, superCtor.prototype)
    this.super = superCtor.prototype;
}

function Point() {
    this.x = 0;
    this.y = 0;
}
Point.prototype.write = function (x, y) {
    this.x = x
    this.y = y
}
Point.prototype.read = function () {
    return {
        x: this.x,
        y: this.y
    }
}
var p = new Point();
p.write(2, 3)
function RangePoint(min, max) {
    Point.apply(this, arguments)
    this.min = min;
    this.max = max;
}
RangePoint.inherits(Point);
RangePoint.prototype.write = function (x, y) {
    x = x < this.min ? this.min : x;
    x = x > this.max ? this.max : x;
    y = y < this.min ? this.min : y;
    y = y > this.max ? this.max : y;
    RangePoint.super.write.apply(this, arguments)
}

var rp = new RangePoint(-50, 50)
rp.write(9.1, 7.8)
console.log(rp.read());

function IntegerRangePoint() {
    RangePoint.apply(this, arguments)
}
IntegerRangePoint.inherits(RangePoint);
IntegerRangePoint.prototype.write = function (x, y) {
    x = Math.round(x);
    y = Math.round(y);
    IntegerRangePoint.super.write.apply(this, arguments)
}
var irp = new IntegerRangePoint(0, 10);
irp.write(9.1, 7.8)
console.log(irp.read())