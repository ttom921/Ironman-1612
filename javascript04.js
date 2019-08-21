// const list = [];
// list[0] = 'Hello';
// list[2] = 'World';

// console.log(list[1]); //undefined
// console.log(list.length) //3

// const numlist = [];
// numlist[0] = 123;
// numlist[2] = 456;
// console.log(numlist[1]); //undefined
// console.log(numlist.length);//3

// const list = [];
// list[0] = 'Hello';
// list['20'] = 'World';

// console.log(list['20']);// World
// console.log(list.length);// 21

// function foo() {
//     const arr= Array.prototype.slice.call(arguments);
//     console.log(arguments);//(1)
//     console.log(arr);//(2)
// }
// foo('hello','world','bar','baz');

// function foo() {
//     const arr= Array.from(arguments);
//     console.log(arguments);//(1)
//     console.log(arr);//(2)
// }
// foo('hello','world','bar','baz');

// const str = 'foo';
// const str_another = Array.prototype.join.call(str, '--');
// const str_the_other = Array.prototype.map.call(str, (char) => {
//     return `${char.toUpperCase()}.`
// }).join('');
// console.log(str);//foo
// console.log(str_another);//f--o--o ​​​​​
// console.log(str_the_other);//F.O.O. 

// const arr = ['b', 'a', 'r'];
// arr.reverse();//[ 'r', 'a', 'b' ] 
// arr;//[ 'r', 'a', 'b' ] 

// const str= 'foo';
// const str_another= Array.prototype.reverse.call(str);

// const str = 'foo';
// const str_thoe_other = str.split('').reverse().join('');
// str_thoe_other;//oof 

// const a =1E20;
// const b =a*100;
// const c= a/0.001;
// a;//100000000000000000000 
// b;//1e+22
// c;//1e+23
// // 使用 toExponential 手動轉指數呈現
// console.log(a.toExponential());//1e+20 

// const a = 123.456789;
// console.log(a.toFixed(1));//123.5 
// console.log(a.toFixed(2));//123.46
// console.log(a.toFixed(3));//123.457
// console.log(a.toFixed(10));//123.4567890000 

// const a = 123.456789;
// console.log(a.toPrecision(1));//1e+2 
// console.log(a.toPrecision(2));//1.2e+2
// console.log(a.toPrecision(3));//123
// console.log(a.toPrecision(4));//123.5
// console.log(a.toPrecision(5));//123.46
// console.log(a.toPrecision(10));//123.4567890 

// console.log(0xAB);//171
// console.log(0o65);//53
// console.log(0b11);//3

// console.log(0.1+0.2 === 0.3);//false 

// function equal(n1, n2) {
//     return Math.abs(n1-n2) < Number.EPSILON;
// }
// var a=0.1+0.2;
// var b= 0.3;
// console.log(equal(a,b));//true
// console.log(equal(0.0000001, 0.0000002));//false

// console.log(Number.isInteger(42));//true
// console.log(Number.isInteger(42.000));//true
// console.log(Number.isInteger(42.3));//false

// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));//true
// console.log(Number.isSafeInteger(Math.pow(2, 53)));//false
// console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));//true

const integer = 123456789;
const signed_integer = integer | 0;