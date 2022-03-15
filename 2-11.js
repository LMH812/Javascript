function cube(height) {
    return function (width) {
        return function (depth) {
            return height * width * depth;
        };
    };
}
console.log(cube(3)(2)(1));
var square = cube(3);
var volume = square(2);
console.log(volume(1));
console.log(volume(2));
console.log(volume(3));
console.log(volume(4));
console.log(volume(5));
