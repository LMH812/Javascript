var ary = [1, 2, 3];
ary.a = 12;
console.log(ary);
ary.show = function () {
    console.log(this.a);
};
ary.show();
