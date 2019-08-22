// var hello = 777;
// console.log(void hello);
// console.log(hello);

// function sayHi() {
//     return void 0;
// }
// const result= sayHi()
// result //undefined

// const interval = 60000;
// let start = null;
// let counter = 1;

// // 經由一些運算得到結果 result，若有結果則 flag "isDone" 設為 true 並回傳結果；若無結果則 flag "isDone" 設為 false 並回傳 undefined
// function getResult() {
//     if (isDone) {
//         return result;
//     }
//     return void 0; // 等同於 undefined
// }

// // 不斷重複詢問是否得到結果？若沒有得到結果，就顯示經過的分鐘數；若得到結果就印出「工作完成」的訊息
// function check(timestamp) {
//     const progress = timestamp - start;
//     if (start === null) { start = timestamp; }

//     if (progress < interval) {
//         requestAnimationFrame(check);
//     } else {
//         if (getResult()) {
//             console.log('工作完成！');
//         } else {
//             console.log(`checking...time passed: ${counter} minute(s).`);
//             counter++;
//             start = timestamp;
//             requestAnimationFrame(check);
//         }
//     }
// }

// requestAnimationFrame(check);


// console.log(isNaN({}));//true
// // 拆解詳細過程如下...
// Number({});//先將空物件轉為數字，得到NaN
// isNaN(NaN);// 檢替是否為NaN，得到true

// console.log(isNaN(123));//false
// console.log(isNaN(-1.23));//false
// console.log(isNaN(5-2));//false
// console.log(isNaN(0));//false
// console.log(isNaN('123'));//false
// console.log(isNaN('Hello World'));//true
// console.log(isNaN('2000/01/01'));//true
// console.log(isNaN(''));//false
// console.log(isNaN(true));//false
// console.log(isNaN(undefined));//true
// console.log(isNaN('NaN'));//true
// console.log(isNaN(NaN));//true
// console.log(isNaN(0/0));//true
// console.log(isNaN(1/0));//false

//console.log(Number.isNaN({}));//false


// console.log(Number.isNaN(123));//false
// console.log(Number.isNaN(-1.23));//false
// console.log(Number.isNaN(5-2));//false
// console.log(Number.isNaN(0));//false
// console.log(Number.isNaN('123'));//false
// console.log(Number.isNaN('Hello World'));//false
// console.log(Number.isNaN('2000/01/01'));//false
// console.log(Number.isNaN(''));//false
// console.log(Number.isNaN(true));//false
// console.log(Number.isNaN(undefined));//false
// console.log(Number.isNaN('NaN'));//true
// console.log(Number.isNaN(NaN));//true
// console.log(Number.isNaN(0/0));//true
// console.log(Number.isNaN(1/0));//false

// console.log((+0).toString());// "0"
// console.log(String(+0));//"0"
// console.log('' + (+0));//"0"

// console.log((-0).toString());// "0"
// console.log(String(-0));//"0"
// console.log('' + (-0));//"0"

// console.log(+'+0');//0
// console.log(Number('+0'));//0
// console.log(JSON.parse('+0'));//

// console.log(+'-0');//0
// console.log(Number('-0'));//0
// console.log(JSON.parse('-0'));//0

// var a = 0;
// var b = 0 / -1;

// console.log(a == b);//true
// console.log(-0 == 0);//true

// console.log(a === b);//true
// console.log(-0 === 0);//true

// console.log(0 > -0);//
// console.log(a > b);//

// function isNegZero(n) {
//     n = Number(n);
//     return (n === 0) && (1 / n === -Infinity);
// }
// // 測試
// console.log(isNegZero(-0));//true
// console.log(isNegZero(0 / -1));//true
// console.log(isNegZero(0));//false


var a = Number('Hello World');// NaN
var b = 0 / -1; //-0 

console.log(Object.is(a,NaN));//true
console.log(Object.is(b,-0));//true
console.log(Object.is(b,0));//false
