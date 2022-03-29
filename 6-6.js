// 策略模式

var data = {
    name: 'Mary',
    message: 'I am lucky!'
}

function Sender(strategy) {
    this.strategy = strategy;
}
Sender.prototype.send = function(data) {
    return this.strategy.send(data)
}

var xmlStrategy = {
    send: function(data) {
        var str = '<xml><name>' + data.name + '</name><message>' + data.message + '</messgae></xml>'
        return str
    }
}

var jsonStrategy = {
    send: function(data) {
        var str = JSON.stringify(data)
        return str
    }
}

var sender = new Sender(jsonStrategy)
var result = sender.send(data)
console.log(result)