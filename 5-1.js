function show(a, b) {
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(arguments);
}
// show(5, 10);
show.call({}, 5, 10);
