// var a = 42;
// var b = String(a); //明確的強制轉型
// var c = a + '';//隱含的強制轉型

// console.log(b);// '42'
// console.log(c);// '42'

// console.log(JSON.stringify(42));//"42"
// console.log(JSON.stringify(true));//"true"
// console.log(JSON.stringify(null));//"null"
// console.log(JSON.stringify(`Hello World`));//"Hello World"

// console.log(JSON.stringify(undefined));// undefined、忽略非法值
// console.log(JSON.stringify(function () { }));// undefined、忽略非法值
// console.log(JSON.stringify(Symbol()));// undefined、忽略非法值
// console.log(JSON.stringify([1, 2, 3, undefined]));//// "[1,2,3,null]"，非法值以 null 取代
// console.log(JSON.stringify({ a: 2, b: function () { } }));//"{"a":2}"，忽略非法屬性

// const a = { someProperty: 'Jack' };
// const b = { anotherProperty: a };
// a.b = b;
// console.log(JSON.stringify(a));// Uncaught TypeError: Converting circular structure to JSON
// console.log(JSON.stringify(b));// Uncaught TypeError: Converting circular structure to JSON

// const someObj = {
//     a: 2,
//     b: function () { },//非法！
//     toJSON: function () {
//         return {
//             a: 2,// 序𦕁化過程只包含a屬性
//         }
//     }
// }
// console.log(JSON.stringify(someObj));// "{"a":2}"

// const a = {
//     someProperty: 'Jack',
//     toJSON: function () {
//         return {
//             prompt: 'Hello World'
//         }
//     }
// };

// const b = {
//     anotherProperty: a,
//     toJSON: function () {
//         return {
//             prompt: 'Hello World'
//         }
//     },
// }

// a.b = b;
// // 序列化成功！不會被報錯了！
// console.log(JSON.stringify(a));// "{"prompt":"Hello World"}"
// console.log(JSON.stringify(b));// "{"prompt":"Hello World"}"

// const someObj = {
//     a: 2,
//     b: function () { }
// }

// console.log(JSON.stringify(someObj,['a']));// "{"a":2}"


// const someObj = {
//     a: 2,
//     b: function () { }
// }

// console.log(JSON.stringify(someObj, function (key, value) {
//     if (key !== 'b') {
//         return value;
//     }
// }));
// // "{"a":2}"

// console.log(Number(undefined));// NaN
// console.log(Number(null));// 0
// console.log(Number(true));// 1
// console.log(Number(false));// 0
// console.log(Number('12345'));// 12345
// console.log(Number('Hello World'));// NaN
// console.log(Number({name:'Jace'}));// NaN

// const a ={
//     name:'Apple',
//     valueOf:function () {
//         return '999'
//     }
// }
// console.log(Number(a));// 999


// const a = new String('a');
// const b= new Number(0);
// const c= new Boolean(false);

// console.log(!!a); // true
// console.log(!!b); // true
// console.log(!!c); // true


// const a = {
//     toString: function () { return 54321 },
// };

// const b = {
//     valueOf: function () { return 12345 },
// };

// console.log(String(a));// "54321"
// console.log(b+'');// "12345"

// console.log((123).toString());

// console.log(+('123'));
// console.log(-('123'));

// const timestamp = +new Date();
// console.log(timestamp);//1566871728004 

// const str = 'Hello World';

// function find(target) {
//     const result = str.indexOf(target);
//     if (~result) {
//         console.log(`找到了，索引值原是 ${result},被轉為${~result}`);
//     } else {
//         console.log(`找不到了，回傳結果原本是 ${result},被轉為${~result}`);
//     }
// }
// find('llo');
// find('abc');

// console.log(Math.floor(-29.8));// -30
// console.log(~~-29.8); // -29
// console.log(-29.8 | 0); //-29

// var a = '123';
// var b = '123px';

// console.log(Number(a));  // 123 
// console.log(parseInt(a));// 123 



// console.log(Number(b));  // NaN 
// console.log(parseInt(b));//123

// console.log(parseInt('HelloWorld'));//NaN

// console.log(Boolean('Hello World'));//true
// console.log(Boolean([]));// true
// console.log(Boolean({}));// true
// console.log(Boolean(null));// false
// console.log(Boolean(undefined));// false
// console.log(Boolean(NaN));// false
// console.log(Boolean(0));//false
// console.log(Boolean(''));// false

// console.log(!!'Hello World');//true
// console.log(!![]);//true
// console.log(!!{});//true
// console.log(!!null);//false
// console.log(!!undefined);//false
// console.log(!!NaN);//false
// console.log(!!0);//false
// console.log(!!'');//false

// const a = '1';
// const b = 1;
// const c = [1, 2];
// const d = [3, 4];

// console.log(a + 1);//"11"
// console.log(b + 1);// 2
// console.log(b + '');// "1"
// console.log(c + d);// "1,23,4"

// const a = {
//     toString: function () { return 54321 },
// };
// const b = {
//     valueOf: function () { return 12345 },
// };

// console.log(String(a));// "54321"
// console.log(b+ '');// "12345"

// const a = '1';
// console.log(a + 1);//"11"
// console.log(a - 0);// 1
// console.log(a * 1);// 1
// console.log(a / 1);// 1
// console.log([9]-[7]);//2

// var a = 12345;
// var b = 'Hello World';
// var c;// undefined
// var d = null;
// if (a) { //true
//     console.log('a 是直的');// a 是直的
// }

// while (c) {//false
//     console.log('從來沒跑過');
// }
// c = d ? a : b;
// console.log(c);// "Hello World"

// if ((a && d) || c) {
//     console.log('結果是真的');//結果是真的
// }

// const a = 'Hello World';
// const b = 777;
// const c = null;

// console.log(a && c);//測試 a 為 true，選 c，結果是 null
// console.log(a && b);//測試 a 為 true，選 b，結果是 777
// console.log(undefined && b);//測試 undefined 為false，選undefined,結果是 undefined
// console.log(a || b);//測試 a 為 true，選 a,結果是 "Hello World"
// console.log(c || 'foo');//測試 c 為 false，選'foo' ，結果是 "foo"

// const flag = true;
// function foo() {
//     console.log('try me');
// }

// flag && foo();//try me

// var s1 = Symbol('Hello World');
// console.log(String(s1));// "Symbol(Hello World)"

// var s2= Symbol(' World Hello');
// console.log(s2+'');// TypeError: Cannot convert a Symbol value to a string

// const n1 = Symbol(777);
// console.log(Number(n1));// TypeError: Cannot convert a Symbol value to a number

// const n2=Symbol(999);
// console.log(+n2);// TypeError: Cannot convert a Symbol value to a number

// const b1 = Symbol(true);
// const b2 = Symbol(false);
// console.log(Boolean(b1));// true
// console.log(Boolean(b2));// true

// const b3 = Symbol(true);
// const b4 = Symbol(false);

// if (b3) {
//     console.log('b3 是直的');
// }
// if (b4) {
//     console.log('b4 是直的');
// }
// // b3 是真的
// // b4 是真的

// const a = '100';
// const b = 100;
// console.log(a == b);//true，強制轉型，將字串'100'轉為數字100
// console.log(a === b);//false

// const a='123';
// const b=123;
// console.log(a===b);
// console.log(a==b);

var a = null;
var b = Object(a);// 等同於 Object()
console.log(a == b);//false

var c = undefined;
var d = Object(c);// 等同於 Object()
console.log(c == d);//false

var e = NaN;
var f = Object(e);//等同於new Nummber(e)
console.log(e == f);//false