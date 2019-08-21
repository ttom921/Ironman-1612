// console.log(typeof 'Hello World');//string
// console.log(typeof true);//boolean
// console.log(typeof 12345678);//number
// console.log(typeof null);//object
// console.log(typeof undefined);// undefined
// console.log(typeof { name:'Jack'});// object
// console.log(typeof Symbol()); // symbol
// console.log(typeof function () {});// function
// console.log(typeof [1, 2, 3]);// object
// console.log(typeof NaN);// number

// const happy = null;
// if (!happy && typeof happy === 'object') {
//     console.log("我是 null!");
// }

// function testMe(arg1, arg2, arg3) {
//     console.log("This is testMe!");
// }
// const list = [1, 2, 3, 4, 5];
// console.log(testMe.length);// 3
// console.log(list.length);// 5

console.log(Object.prototype.toString.call([1, 2, 3])); //[object Array]
console.log(Object.prototype.toString.call({ name: 'Jack' }));//[object Object]
console.log(Object.prototype.toString.call(function SayHi() {}));//[objcet Function]
console.log(Object.prototype.toString.call(/helloworld/i));//[object RegExp]
console.log(Object.prototype.toString.call(new Date()));//[object Date]