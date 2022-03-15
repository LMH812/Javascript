function base(a, b) {
    console.log(this, arguments);
    console.log(this);
    console.log(a);
    console.log(b);
}

base.bind({ name: "Henry" })(2, 3, 4, 5);
