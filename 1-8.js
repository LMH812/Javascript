/*
 將 arguments 轉換成標準陣列
*/

function build() {
    var args = []
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    console.log(args);
}

build(10, 20 ,30)