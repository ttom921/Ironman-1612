// console.log(typeof 'Hello World');// string
// console.log(typeof true);// boolean
// console.log(typeof 1234567);// number
// console.log(typeof null);// object
// console.log(typeof undefined);// undefined
// console.log(typeof { name: 'Jack' });// object
// console.log(typeof Symbol());// symbol
// console.log(typeof function () { });// function
// console.log(typeof [1, 2, 3]);// object
// console.log(typeof NaN);// number

// console.log(Object.prototype.toString.call([1, 2, 3]));//[object Array]
// console.log(Object.prototype.toString.call({ name: 'Jack' }));//[object Object]
// console.log(Object.prototype.toString.call(function sayHi() { }));//[object Function]
// console.log(Object.prototype.toString.call(/hellowrold/i));//[object Regexp]
// console.log(Object.prototype.toString.call(new Date()));//[object Date]

// const str = 'Hello World!';
// console.log(str instanceof String)// false
// console.log(str.length);// 12

// const strObj = new String('Hello World!');
// console.log(strObj instanceof String);// true
// console.log(strObj.length);// 12


// const obj = {
//     '!!12345!!': 'Hello Wrold',
// };
// obj.!!12345!!; //Uncaught SyntaxError: Unexpected token !
// obj["!!12345!!"]// "Hello World"

// const prefix = 'fresh-';
// const fruits = {
//     [prefix + 'apple']: 100,
//     [prefix + 'orange']: 60,
// };

// console.log(fruits['fresh-apple']);//100
// console.log(fruits['fresh-orange']);//60

// const obj = { Qoo: '有種果汁真好喝' };
// obj[obj]='喝的時候酷兒';
// obj[999]='喝完臉紅紅！';
// console.log(obj['[object Object]']);//喝的時候酷兒
// console.log(obj['999']);//喝完臉紅紅！

// const array = [1, 2, 3];
// console.log(array.length); // 3
// array[3] = 4;
// console.log(array.length); // 4
// array['foo'] = 'bar';
// console.log(array.length); // 4, 陣列的長度不變！

// const array = [1, 2, 3];
// array['3'] = 'foo';
// console.log(array);//[1, 2, 3, "foo"]

// const newObj = JSON.parse(JSON.stringify(oldobj));

// const simpleObj = {
//     a: 1,
//     b: 2,
// };
// const newSimpleObj = Object.assign({}, simpleObj);
// console.log(newSimpleObj === simpleObj);//false

// const newSimpleObj2 = JSON.parse(JSON.stringify(newSimpleObj));
// console.log(newSimpleObj2 === simpleObj);//false

// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3,
//     }
// };
// const newObj = Object.assign({}, obj);
// console.log(newObj.b === obj.b);// true

// const newObj2 = JSON.parse(JSON.stringify(newObj));
// console.log(newObj2.b === obj.b);// false

// const obj = {
//     name: 'Apple',
// };
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// const obj = {};
// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: true,
//     configurable: true,
//     enumerable: true,
// });
// console.log(obj.name);// Apple

// const obj = {};
// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: false,//不可寫入！
//     configurable: true,
//     enumerable: true,
// });
// console.log(obj.name);// Apple
// obj.name='Grape';
// console.log(obj.name);// Apple，屬性name的值無法被變更

// const obj = {};
// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: true,
//     configurable: false,
//     enumerable: true,
// });

// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: true,
//     configurable: true,// false -> true
//     enumerable: true,
// });
// // Uncaught TypeError: Cannot redefine property: name

// const obj = {};
// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: true,//
//     configurable: false,
//     enumerable: true,
// });

// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: false,//
//     configurable: false,
//     enumerable: true,
// });
// // 這是可行的

// const obj = {};
// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: false,//
//     configurable: false,
//     enumerable: true,
// });

// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: true,//
//     configurable: false,
//     enumerable: true,
// });
// // Uncaught TypeError: Cannot redefine property: name

// const obj = {};
// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: true,//
//     configurable: false,
//     enumerable: true,
// });

// delete obj.name;
// console.log(obj.name);// Apple，name屬性未被刪除

// const obj = {};
// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: true,
//     configurable: true,
//     enumerable: true,
// });

// delete obj.name;
// console.log(obj.name);//undefined
// console.log(obj);//{}

// const obj = {};
// obj.hello = 'world';
// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: true,
//     configurable: true,
//     enumerable: true,
// });
// for (let prop in obj) {
//     console.log(prop);//（1）
// }
// //hello
// //name

// Object.defineProperty(obj, 'name', {
//     value: 'Apple',
//     writable: true,
//     configurable: true,
//     enumerable: false,
// });
// for (let prop in obj) {
//     console.log(prop);//（2）
// }
// //hello

// const foo = {};
// foo.list = [1, 2, 3];
// foo.list.push(4);
// console.log(foo.list);// [ 1, 2, 3, 4 ]


// const obj = {};
// Object.defineProperty(obj, 'CONST_PI', {
//     value: 3.14,
//     writable: false,
//     configurable: false,
//     enumerable: true,
// });
// console.log(obj.CONST_PI);// 3.14

// const obj = {
//     name: 'Jack',
// };
// Object.preventExtensions(obj);
// obj.hello = 'world';
// console.log(obj.hello);// undefined

// const obj = {
//     name: 'Jack',
// };
// Object.seal(obj);
// //嘗試加入新的屬性 hello
// obj.hello = 'world';
// console.log(obj.hello);//undefined

// //嘗試刪除屬性name
// console.log(delete obj.name); //false
// console.log(obj.name);//Jack

// //嘗試重新設定特徵值
// Object.defineProperty(obj, 'name', {
//     value: 3.14,
//     writable: false,
//     configurable: true,
//     enumerable: true,
// });
// // TypeError

// const list = ['apple', 'grape'];
// const obj = {
//     name: 'Jack',
//     favFruits: list,
// }
// const anotherObj = {
//     name: 'Apple',
//     favFruits: list,
// }
// Object.freeze(obj);
// Object.freeze(obj.favFruits);

// //共用的物件被凍結！
// list.push('orange');//Uncaught TypeError: Cannot add property 2, object is not extensible

// const obj = {
//     get name() {
//         return this._name_;
//     },
//     set name(val) {
//         this._name_ = `Hi, I am ${val}`;
//     }
// };
// obj.name = 'Jack';
// console.log(obj.name);//Hi, I am Jack

// const obj = {};
// Object.defineProperty(obj, 'name', {
//     configurable: true,
//     enumerable: true,
//     get: function name() {
//         return this._name_;
//     },
//     set: function name(val) {
//         this._name_ = `Hi, I am ${val}`;
//     }
// });
// obj.name = 'Jack';
// console.log(obj.name);//Hi, I am Jack

// var obj1 = {
//     job: undefined,
// };
// var obj = Object.create(obj1);// 邁立 obj 與 obj1的連結
// obj.name = undefined;

// console.log(obj.name);// undefined
// console.log(obj.hasOwnProperty('name'));// true

// console.log(obj.job);
// console.log(obj.hasOwnProperty('job'));//false

// console.log('job' in obj);// true,但在原型串鏈中可找到
// console.log(obj1.hasOwnProperty('job'));//true

// console.log(obj.hello);//undefined
// console.log(obj.hasOwnProperty('hello'));//false
// console.log('hello' in obj);//false

// const obj = {};
// Object.defineProperty(obj, 'name', {
//     value: 'Jack',
//     enumerable: true,
// });
// Object.defineProperty(obj, 'hello', {
//     value: 'world',
//     enumerable: false,
// });
// for (let k in obj) {
//     console.log(k, obj[k]);
// }
// //name Jack
// console.log(obj.propertyIsEnumerable('name'));//true
// console.log(Object.keys(obj));//[ 'name' ]
// console.log(Object.getOwnPropertyNames(obj));//[ 'name', 'hello' ]

// const list = ['Apple', 'Bob', 'Cathy', 'Doll'];
// list.forEach((item, index, array) => {
//     console.log(item, index, array);
// });
// //Apple 0 [ 'Apple', 'Bob', 'Cathy', 'Doll' ]
// //Bob 1 [ 'Apple', 'Bob', 'Cathy', 'Doll' ] 
// //Cathy 2 [ 'Apple', 'Bob', 'Cathy', 'Doll' ] 
// //Doll 3 [ 'Apple', 'Bob', 'Cathy', 'Doll' ]


// const list = [
//     {
//         name: 'apple',
//         count: 20,
//     }, {
//         name: 'corn',
//         count: 100,
//     }, {
//         name: 'grape',
//         count: 50,
//     }, {
//         name: 'pieapple',
//         count: 80,
//     }
// ];
// const result = list.every((item, index, array) => {
//     console.log(item, index, array);
//     return item.cout > 50;
// });
// console.log(`result: ${result}`);
// //{ name: 'apple', count: 20 } 0 [ { name: 'apple', count: 20 },   { name: 'corn', count: 100 },   { name: 'grape', count: 50 },   { name: 'pieapple', count: 80 } ]
// //result: false

// const list = [
//     {
//         name: 'apple',
//         count: 20,
//     }, {
//         name: 'corn',
//         count: 100,
//     }, {
//         name: 'grape',
//         count: 50,
//     }, {
//         name: 'pieapple',
//         count: 80,
//     }
// ];
// const result = list.some((item, index, array) => {
//     console.log(item, index, array);
//     return item.count > 50;
// });
// console.log(`result: ${result}`);
// //{ name: 'apple', count: 20 } 0
// //{ name: 'corn', count: 100 } 1
// //true

const array = [1, 2, 3];
for (let v of array) {
    console.log(v);
}
// 1
// 2
// 3