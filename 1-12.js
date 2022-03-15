function run() {
    try {
        return 'abc'
    } finally {
        console.log('xyz');
    }
}

var result = run()
console.log(result);