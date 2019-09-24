// function Book(name, pNum) {
//     this.name = name; //書名
//     this.pNum = pNum; //頁數
//     this.setComments = function (comment) {
//         this.comment = comment;
//     }
// }

// var ydkhs_1 = new Book('導讀，型別與文法', 257);
// var ydkhs_2 = new Book('範疇與閉包 / this 與物件原型', 251);

// ydkhs_1.setComments('好書！');
// console.log(ydkhs_1.comment);//好書！

// console.log(ydkhs_1.setComments === ydkhs_2.setComments);// false

// function Book(name, pNum) {
//     this.name = name; //書名
//     this.pNum = pNum; //頁數
//     this.comment = null;//評等
// }
// Book.prototype.setComments = function (comment) {
//     this.comment = comment;
// }
// var ydkhs_1 = new Book('導讀，型別與文法', 257);
// var ydkhs_2 = new Book('範疇與閉包 / this 與物件原型', 251);

// ydkhs_1.setComments('好書！');
// console.log(ydkhs_1.comment);//好書！

// ydkhs_2.setComments('超好書！');
// console.log(ydkhs_2.comment);//超好書！

// console.log(ydkhs_1.setComments === ydkhs_2.setComments);// true，確認是同一個函式

// function Book(name, pNum) {
//     this.name = name; //書名
//     this.pNum = pNum; //頁數
//     this.comment = null;//評等
// }
// Book.prototype.setComments = function (comment) {
//     this.comment = comment;
// }
// var ydkjs_1 = new Book('導讀，型別與文法', 257);
// console.log(ydkjs_1.__proto__ === Book.prototype);//true
// console.log(Object.getPrototypeOf(ydkjs_1) === Book.prototype);//true

// console.log(ydkjs_1.hasOwnProperty('name'));//true
// console.log(ydkjs_1.hasOwnProperty('setComments'));//false


// function Book(name, pNum) {
//     this.name = name; //書名
//     this.pNum = pNum; //頁數
//     this.comment = null;//評等
// }
// Book.prototype.setComments = function (comment) {
//     this.comment = comment;
// }
// var ydkjs_1 = new Book('導讀，型別與文法', 257);
// var ydkjs_2 = new Book('範疇與閉包 / this 與物件原型', 251);

// Object.defineProperty(ydkjs_1, 'hello', {
//     value: 'world',
//     writable: true,
//     configurable: true,
//     enumerable: false,//設定 hello 為不可列舉的屬性
// });

// // for (let prop in ydkjs_1) {
// //     console.log(prop);
// // }

// //name
// //pNum ​​​​​
// //comment ​​​​​
// //setComments ​​​​​

// console.log('hello' in ydkjs_1);// true
// console.log('name' in ydkjs_1);// true



// function Book(name, pNum) {
//     this.name = name; //書名
//     this.pNum = pNum; //頁數
//     this.comment = null;//評等
// }
// Book.prototype.setComments = function (comment) {
//     this.comment = comment;
// }
// var ydkjs_1 = new Book('導讀，型別與文法', 257);
// var ydkjs_2 = new Book('範疇與閉包 / this 與物件原型', 251);

// console.log(ydkjs_1 instanceof Book);//true
// console.log(ydkjs_2 instanceof Book);//true

// console.log(ydkjs_1 instanceof Object);//true
// console.log(ydkjs_1 instanceof Function);//true
// console.log(ydkjs_2 instanceof Object);//true
// console.log(ydkjs_2 instanceof Function);//true

// console.log(window instanceof Book);//false
// console.log(window instanceof window);//true



// function Book(name, pNum) {
//     this.name = name; //書名
//     this.pNum = pNum; //頁數
//     this.comment = null;//評等
// }
// Book.prototype.setComments = function (comment) {
//     this.comment = comment;
// }

// function Novel(name, pNum, price) {
//     Book.apply(this, [name, pNum]);//Novel 繼承 Book
//     this.price = price;
// }

// Novel.prototype = Object.create(Book.prototype);

// Novel.prototype.printPrice = function () {
//     console.log(`${this.name} is ${this.price}`);
// }

// var ydkjs_1 = new Book('導讀，型別與文法', 257);
// var ydkjs_2 = new Book('範疇與閉包 / this 與物件原型', 251);
// var novel = new Novel('最近沒在看小說 ><', 500, 600);

// console.log(Book.prototype.isPrototypeOf(ydkjs_1));//true
// console.log(Book.prototype.isPrototypeOf(novel));//true

// console.log(Novel.prototype.isPrototypeOf(ydkjs_1));//false
// console.log(Novel.prototype.isPrototypeOf(novel));//true




function Book(name, pNum) {
    this.name = name; //書名
    this.pNum = pNum; //頁數
    this.comment = null;//評等
}
Book.prototype.setComments = function (comment) {
    this.comment = comment;
}

function Novel(name, pNum, price) {
    Book.apply(this, [name, pNum]);//Novel 繼承 Book
    this.price = price;
}
//pre-ES6
// throws away default existing `Novel.prototype`
Novel.prototype = Object.create(Book.prototype);

//ES6+
// modifies existing `Novel.prototype`
Object.setPrototypeOf(Novel.prototype, Book.prototype);

var ydkjs_1 = new Book('導讀，型別與文法', 257);
var ydkjs_2 = new Book('範疇與閉包 / this 與物件原型', 251);
var novel = new Novel('最近沒在看小說 ><', 500, 600);

console.log(Object.getPrototypeOf(ydkjs_1) === Book.prototype);//true
console.log(ydkjs_1.__proto__ === Book.prototype);//true