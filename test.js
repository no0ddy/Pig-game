/*let myObj = {
  num1: 1,
  num2: 9,
  sum: () => myObj.num1 + myObj.num2,
};
console.log(myObj.sum());
const sum = () => 4 + 9;
console.log(sum());
let a = 7;
let b = sum() * a;
console.log(b);
let g = sum();
let mul = function (a, g) {
  return a * g;
};
console.log(mul(2, sum()));
let arr = [1, 2];
arr[3] = 3;
console.log(arr);*/
var isLongPressedName = function (name, typed) {
  let regex = /[alex]/g;
  return console.log(typed.match(regex));
};
isLongPressedName('alex', 'aaleex');
