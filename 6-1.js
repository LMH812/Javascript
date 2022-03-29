// 防止忘記 new

function CreateNumber(n) {
    if (this instanceof CreateNumber) {
        this.number = n
    } else {
        return new CreateNumber(n)
    }
}

var obj = CreateNumber(55)
console.dir(obj);