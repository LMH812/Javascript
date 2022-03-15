// for (var i = 1; i < 11; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     })(i);
// }

// for (let i = 0; i < 11; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

for (var i = 1; i < 11; i++) {
    setTimeout(
        function (i) {
            console.log(i);
        },
        i * 1000,
        i
    );
}
