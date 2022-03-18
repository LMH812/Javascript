// 共享參考
// 指向同一記憶體位置
var arr1 = [1, 2, 3];
var arr2 = arr1;
arr2.push(4);
console.log(arr1);
// 避免共享參考
// slice 回傳新的陣列物件，淺層拷貝
var arr3 = arr1.slice();
arr3.push(5);
console.log(arr1);
console.log(arr3);
