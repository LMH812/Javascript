// 單體模式
function Cat() {
    if (typeof Cat.instance === 'object') {
        return Cat.instance
    }
    this.name = 'kitty';
    Cat.instance = this
}
Cat.prototype.move = function () {
    return this.name + ' move'
}
var cat1 = new Cat()
var cat2 = new Cat()
cat1.name = 'coco'
console.log(cat2.move());