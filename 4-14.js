function CreatePerson() {
    Object.defineProperty(this, "name", {
        value: "Mark",
        enumerable: true,
        writable: false,
        configurable: true,
    });
}
CreatePerson.prototype.getName = function () {
    console.log(this.name);
};

var p1 = new CreatePerson();
console.log(p1);
p1.getName();
p1.name = "John";
p1.getName();

var obj = {};
(function () {
    var _name;
    Object.defineProperty(obj, "name", {
        get: function () {
            console.log("get");
            return _name;
        },
        set: function (value) {
            console.log(value);
            _name = value;
        },
    });
    console.log(_name);
})();
console.log(obj);
obj.name = "Henry";
