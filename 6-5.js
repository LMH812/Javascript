// 裝飾者模式
function Computer() {
    this.price = function() {
        return 41900;
    }
}

function addMemory(pc) {
    var price = pc.price()
    pc.price = function() {
        return price + 10000
    }
}

function addEngraving(pc) {
    var price = pc.price()
    pc.price = function() {
        return price + 1000
    }
}

function addInsurance(pc) {
    var price = pc.price()
    pc.price = function() {
        return price + 8590
    }
}

var mb = new Computer()
addMemory(mb)
console.log(mb.price());