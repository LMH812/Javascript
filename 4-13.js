function CreatePerson(name, gender, year) {
    this.name = name;
    this.gender = gender;
    function caclAge(y) {
        var today = new Date();
        return today.getFullYear() - y;
    }
    var age = caclAge(year);
    this.showAge = function () {
        console.log("my age:" + age);
    };
}
var p1 = new CreatePerson("Mark", "male", 1989);
console.log(p1);
console.log(p1.age);
