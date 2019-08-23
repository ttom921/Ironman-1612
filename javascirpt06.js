// const s = new String('Hello World!');

// console.log(s);//String 'Hello World!' 
// console.log(s.toString());// "Hello World!"
// console.log(typeof s);// object
// console.log(s instanceof String);// true
// console.log(Object.prototype.toString.call(s));//[object String]

// console.log(Object.prototype.toString.call(123456789));//[object Number] 
// console.log(Object.prototype.toString.call('Hello World'));//[object String] 
// console.log(Object.prototype.toString.call(true));//[object Boolean]
// console.log(Object.prototype.toString.call(null));//[object Null]
// console.log(Object.prototype.toString.call(undefined));//[object Undefined] 
// console.log(Object.prototype.toString.call([1, 2, 3]));//[object Array]
// console.log(Object.prototype.toString.call({ name: 'Jack' }));//[object Object] 
// console.log(Object.prototype.toString.call(function sayHi() { }));//[object Function] 
// console.log(Object.prototype.toString.call(/helloworld/i));//[object RegExp]
// console.log(Object.prototype.toString.call(new Date()));//[object Date]
// console.log(Object.prototype.toString.call(Symbol('foo')));//[object Symbol]


// const s = 'Hello World!';
// console.log(s.length);//12

// const s = new String('Hello World!');//錯誤示範！效能差！
// console.log(s.length);//12

// const s_the_other= Object('Hello World!');// 錯誤示範！效能差！
// console.log(s_the_other.length);//12

// const s_another ='Hello World!';//正確示範！效能佳！
// console.log(s_another.length);//12

// const isValid = new Boolean(false);

// if (isValid) {
//     console.log('可以繼續運作...');
// } else {
//     console.log('不合規則，等得處理...');
// }
// // 可以繼續運作...

// const a = Array(10);
// console.log(a);//
// console.log(a.length);//

// const b =[undefined,undefined,undefined];
// console.log(delete b[1]);
// console.log(b);

const name = 'Apple';
const pattern = new RegExp("\\b(?:" + name + ")+\\b", "ig");
const matches = 'Hi, Apple'.match(pattern);

console.log(matches);//[ 'Apple' ] 