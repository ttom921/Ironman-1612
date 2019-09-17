// function sayHello() {
//     console.log(this);
// }
// sayHello();// Window

// function sayHello() {
//     console.log(this.hello);
// }
// var hello = 'Hello World';
// sayHello();// Hello World

// 'user strict';
// a = 1;


// const user = {
//     name: 'Jack',
//     sayHi: prompt
// }
// function prompt() {
//     console.log(this.name);
// }
// user.sayHi();// 'Jack'

// const anotherUser = {
//     name: 'Not Jack!',
//     sayHi: prompt
// }
// const user = {
//     name: 'Jack',
//     anotherUser: anotherUser
// }
// function prompt() {
//     console.log(this.name);
// }
// user.anotherUser.sayHi();// 'Not Jacke!'

// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 2,
//     foo: foo
// }
// var bar = obj.foo;
// var a = 'oops, global';
// bar();

// function foo() {
//     console.log(this.a);
// }
// function doFoo(fn) {
//     fn();
// }
// var obj = {
//     a: 2,
//     foo: foo
// };

// var a = 'oops, global';

// doFoo(obj.foo);

// let cat = {
//     name: 'Hello Kitty'
// };
// let dog = {
//     name: 'Snoopy'
// };
// function sayHi(num) {
//     console.log('Hello,I am ' + this.name);
//     console.log('My number is ' + num);
// }
// sayHi.call(cat, '1');
// sayHi.call(dog, '2');

// let cat = {
//     name: 'Hello Kitty'
// };
// let dog = {
//     name: 'Snoopy'
// };
// function sayHi(args) {
//     console.log('Hello,I am ' + this.name);
//     console.log('My number is ' + args[0]);
// }
// sayHi.apply(cat, ['1']);
// sayHi.apply(dog, ['2']);

// let cat = {
//     name: 'Hello Kitty'
// };
// let dog = {
//     name: 'Snoopy'
// };
// function sayHi(ags) {
//     console.log('Hello,I am ' + this.name);
// }
// sayHi.bind(cat)();
// sayHi.bind(dog)();


// var obj = {
//     msg: 'Hi!'
// }
// setTimeout(function () {
//     console.log(this.msg);
// }.bind(obj), 2000);

// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }
// //簡易的綁定 this 的 helper
// function bind(fn, obj) {
//     return function () {
//         return fn.apply(obj, arguments);
//     };
// }

// var obj = {
//     a: 2
// };
// var bar = bind(foo, obj);
// var b = bar(3);// 2 3
// console.log(b);// 5

// function foo(el) {
//     console.log(el, this.id);
// }
// var obj = {
//     id: 'awesome'
// };
// [1, 2, 3].forEach(foo, obj); // 1 awesome  2 awesome  3 awesome

// function Cat(name) {
//     this.name = name;
//     this.sayHi = function () {
//         console.log('Hi,I am ' + name);
//         console.log(this === kitten);
//     }
// }
// var kitten = new Cat('Pusheen');// "Hi, I am Pusheen"
// kitten.sayHi();// true

// function foo(a, b) {
//     console.log(`a: ${a}, b: ${b}`);
// }
// foo.apply(null, [2, 3]);//a: 2, b: 3

// var bar = foo.bind(null, 4);
// bar(5);//a: 4, b: 5


// function foo(a, b) {
//     console.log(`a: ${a}, b: ${b}`);
// }
// foo(...[1, 2]);// a: 1, b: 2

// function foo(a, b) {
//     console.log(`a: ${a}, b: ${b}`);
// }
// var ø = Object.create(null);// 邁立空物件

// foo.apply(ø, [2, 3]);// a: 2,b: 3

// var bar = foo.bind(ø, 4);
// bar(5);// a: 4,b: 5

// function foo() {
//     console.log(this.a);
// }

// var a = 2;
// var o = { a: 3, foo: foo };
// var p = { a: 4 };
// o.foo();// 3
// (p.foo = o.foo)();

// if (!Function.prototype.softBind) {
//     Function.prototype.softBind = function (obj) {
//         var fn = this,
//             curried = [].slice.call(arguments, 1),
//             bound = function bound() {
//                 return fn.apply(
//                     /** 
//                     這裡判斷三種狀況…
//                       - this 沒有值嗎？例如：undefined
//                       - this 的值是 window 嗎？
//                       - this 的值是 global 嗎？
//                       任一狀況為 true 的話，則就回傳預設要綁定為 this 物件，也就是 obj
//                     **/
//                     (!this ||
//                         (typeof window !== 'undefined' && this === window) ||
//                         (typeof global !== 'undefined' && this === global)
//                     ) ? obj : this,
//                     curried.concat.apply(curried, arguments)
//                 );
//             };
//         bound.prototype = Object.create(fn.prototype);
//         return bound;
//     };
// }

// function foo() {
//     console.log('name: ' + this.name);
// }

// var obj = { name: 'obj' };
// var obj2 = { name: 'obj2' };
// var obj3 = { name: 'obj3' };
// var fooOBJ = foo.softBind(obj);
// fooOBJ();// (1) name: obj <---- 退回到 obj
// obj2.foo = foo.softBind(obj);
// obj2.foo();// (2) name:obj2
// fooOBJ.call(obj3);//(3) name:obj3
// setTimeout(obj2.foo, 10);//(4) name:obj <---- 退回到 obj


// var name = 'Apple';
// var obj = {
//     name: 'Jack',
//     sayHi: function () {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// obj.sayHi();
// setTimeout(obj.sayHi, 1000);

// var name = 'Apple';
// var obj = {
//     name: 'Jack',
//     sayHi: function () {
//         var _this = this;
//         setTimeout(function () {
//             console.log(`Hi, I am ${_this.name}`);
//         }, 1000);
//     }
// }
// obj.sayHi();

// var name = 'Apple';
// var obj = {
//     name: 'Jack',
//     sayHi: function () {
//         setTimeout(function () {
//             console.log(`Hi, I am ${this.name}`);
//         }.bind(this), 1000);
//     }
// }
// obj.sayHi();// Hi, I am Jack

var name = 'Apple';
var obj = {
    name: 'Jack',
    sayHi: function () {
        setTimeout(() => {
            console.log(`Hi, I am ${this.name}`);
        }, 1000);
    }
}
obj.sayHi();// Hi, I am Jack