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

const a = '1';
console.log(a + 1);//"11"
console.log(a - 0);// 1
console.log(a * 1);// 1
console.log(a / 1);// 1
console.log([9]-[7]);//2
