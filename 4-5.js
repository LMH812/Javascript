function CreatePerson(name, gender) {
    this.name = name;
    this.gender = gender;
    this.showName = function () {
        console.log("my name:" + this.name);
    };
    this.showGender = function () {
        console.log("my gender:" + this.gender);
    };
}

var p1 = new CreatePerson("Mark", "male");
var p2 = new CreatePerson("Susan", "femail");
console.log(p1);
p1.showName();
p1.showGender();
