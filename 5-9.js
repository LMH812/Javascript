Function.prototype.inherits = function (superCtor) {
    function F() {}
    F.prototype = superCtor.prototype;
    // F.prototype = A.prototype
    this.prototype = new F();
    // B.prototype = new F()
    this.super = superCtor.prototype;
    // B.super = A.prototype
    this.prototype.constructor = this;
    // B.prototype.constructor = B
};

function A(abc) {
    this.abc = abc || 12;
    console.log("A class");
}
A.prototype.show = function () {
    console.log(this.abc);
};
function B() {
    A.apply(this, arguments);
}
B.inherits(A);
var objB = new B();
console.log(objB);
