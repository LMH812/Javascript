// 外觀模式
var cpu = {
    excute: function() {
        console.log('execute');
    }
}

var memory = {
    load: function() {
        console.log('load');
    }
}

var hdd = {
    write: function() {
        console.log('write');
    }
}

var computer = {
    work: function() {
        memory.load();
        cpu.excute();
        hdd.write()
    }
}
var user = {
    main: function() {
        computer.work()
    }
}
user.main()