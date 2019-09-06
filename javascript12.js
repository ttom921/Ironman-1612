// function foo(a) {
//     var b = 2;
//     function bar() {
//         //...
//     }
//     var c = 3;
//     console.log(a);//2
//     console.log(b);//2
//     console.log(c);//3
//     bar();
// }
// foo(2);

// function foo(a) {
//     var b = 2;
//     function bar() {
//         //...
//     }
//     var c = 3;
// }
// foo(2);
// console.log(a);
// console.log(b);
// console.log(c);
// bar();

// function foo() {
//     var secretData = 'HelloWorld';
//     function bar() {
//         return secretData.split('').join('-');
//     }
//     return {
//         bar
//     }
// }
// var baz = foo();
// var publicData = baz.bar();

// console.log(publicData);
// console.log(secretData);

// function doSomething(a) {
//     b = a + doSomethingElse(a * 2);
//     console.log(b * 3);
// }
// function doSomethingElse(a) {
//     return a - 1;
// }
// var b;

// doSomething(2); // 15

// function doSomething(a) {
//     b = a + doSomethingElse(a * 2);
//     console.log(b * 3);
// }
// function doSomethingElse(a) {
//     return a - 1;
// }
// var b;

// doSomething(2); // 12

// function doSomethingElse(a) {
//     return a - 2;
// }

// function doSomething(a) {
//     b = a + doSomethingElse(a * 2);
//     console.log(b * 3);
//     function doSomethingElse(a) {
//         return a - 1;
//     }
// }

// var b;

// doSomething(2); // 15

// function doSomethingElse(a) {
//     return a - 2;
// }

// function foo() {
//     function bar(a) {
//         i = 3;
//         console.log(a + i);
//     }
//     for (var i = 0; i < 10; i++) {
//         bar(i * 2);
//     }
// }
// foo();

// function foo() {
//     function bar(a) {
//         var i = 3;// 將 bar 內的 i 宣告為區域變數
//         console.log(a + i);
//     }
//     for (var i = 0; i < 10; i++) {
//         bar(i * 2);
//     }
// }
// foo();

// var MyReallyCoolLibrary = {
//     awesome: 'stuff',
//     doSomething: function () {
//         //...
//     },
//     doAnotherThing: function () {
//         // ...
//     }
// };

// function foo() {
//     var a = 3;
//     console.log(a);//3
// }
// foo();

// var foo = function bar() {
//     var a = 3;
//     console.log(3);//3
// }
// foo();


// var foo = function bar() {
//     var a = 3;
//     console.log(a); // 3
// }
// foo();

// var foo = function () {
//     var a = 3;
//     console.log(a); // 3
// }
// foo();

// setTimeout(function () {
//     console.log('等一秒後執行');
// }, 1000);

// setTimeout(() => {
//     console.log('等一秒後執行');
// }, 1000);

// setTimeout(function timeoutHandler() {
//     console.log('等一秒後執行');
// }, 1000);

// const timeoutHandler = () => {
//     console.log('等一秒後執行');
// }
// setTimeout(timeoutHandler, 1000);

// (function foo() {
//     var a = 3;
//     console.log(3);//3
// })();
// foo();// foo is not defined

// (function () {
//     var a = 3;
//     console.log(3);//3
// })();



// var a = 2;
// (function IIFE(global) {
//     var a = 3;
//     console.log(a);
//     console.log(global.a);
// })(window);

// console.log(a);


// undefined = true;
// (function IIFE(undefined) {
//     var a;
//     if (a === undefined) {
//         console.log('Undefined 在這裡很安全！');
//     }
// })();

// (function foo() {
//     var a = 3;
//     console.log(a);// 3
// })();
// foo();// Uncaught ReferenceError: foo is not defined

// {
//     const foo = () => {
//         let a = 3;
//         // 做一些運算...
//         console.log(a);
//     };
// }
// foo();// Uncaught ReferenceError: foo is not defined


// var foo = true;
// if (foo) {
//     const bar = foo * 2;
//     console.log(bar);//
// }
// console.log(bar);


// var foo = true;
// if (foo) {
//     let bar = foo * 2;
//     console.log(bar);//
// }
// console.log(bar);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i); // ReferenceError: i is not defined

// {
//     let i;
//     for (i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }

// console.log(i); // ReferenceError: i is not defined

if (foo) {
    console.log(bar); // ReferenceError
    let bar = foo * 2;
}