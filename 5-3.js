function A() {
    this.abc = 12;
    this.run = function () {
        console.log("go");
    };
}
A.prototype.show = function () {
    console.log(this.abc);
};

// 這裡的 this 指向 objB
// call 可以繼承屬性及方法，但無法繼承原型方法。
function B() {
    // A 建構函式的 this 就會指向 這個 B 的建構式。
    A.call(this);
}
var objB = new B();
objB.run();
