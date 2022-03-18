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
B.prototype = new A();
var objB = new B();
console.log(objB);
