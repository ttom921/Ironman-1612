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

function Cat(name) {
    this.name = name;
    this.sayHi = function () {
        console.log('Hi,I am ' + name);
        console.log(this === kitten);
    }
}
var kitten = new Cat('Pusheen');// "Hi, I am Pusheen"
kitten.sayHi();// true