// 因為共享參考的關係，子類別原型方法，父類別也會受到影響。
function A() {
    this.abc = 12;
}
A.prototype.show = function () {
    console.log(this.abc);
};
function B() {
    A.call(this);
}
B.prototype = A.prototype;
var obj = new B();
B.prototype.square = function () {
    console.log(this.abc * this.abc);
};
var objA = new A();
var objB = new B();
console.log(objA);
console.log(objB);
