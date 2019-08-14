// const x = 1;
// y = 2;
// const product = {
//     name: 'apple',
//     count: 100,
// };

// delete x;
// console.log(x);
// delete y;
// //console.log(y);

// delete product.count;
// console.log(product);

// const product ={
//     name:'apple',
//     count:100,
// }
// console.log('name' in product);
// console.log('vaild' in product);

// function sayHi(name) {
//     console.log(`Hi, I am ${name}`);
// }
// sayHi("Jack");

// const product = "100";
// const shipment = 100;
// const total = product + shipment;
// console.log(total);

// const product = "100";
// const shipment = 100;
// const total = Number(product) + shipment;
// console.log(total);

// console.log(product === shipment)// false
// console.log(product == shipment) // true

// console.log(typeof "Hello World");// string
// console.log(typeof true);// boolean
// console.log(typeof 12345678);// number
// console.log(typeof null);// object
// console.log(typeof undefined);// undefined
// console.log(typeof { name: "jack" });// object
// console.log(typeof Symbol());// symbol
// console.log(typeof function () { });// function
// console.log(typeof [1, 2, 3]);// objcet
// console.log(typeof NaN);// number

// const prompt = "Hello World";
// console.log(prompt.length);

// const a ='100';
// const b = 100;

// console.log(a == b);// true 強制轉型，將字串 '100' 轉為數字 100
// console.log(a ===b);//false  

// const a = [1, 2, 3, 4, 5];
// const b = [1, 2, 3, 4, 5];
// console.log(a == b);//false
// console.log(a === b);//false

// console.log("ab" < "cd");//true

// console.log("99" > 98);//true, 字串"99"被強昀轉型為數字 99

// console.log("Hello World" > 1);//false 字串"Hello World" 無法轉為數字，變成NaN
// console.log("Hello World" < 1);//false
// console.log("Hello World" = 1);//false

// console.log(NaN > NaN);//false
// console.log(NaN < NaN);//false
// console.log(NaN === NaN);//false
// console.log(NaN == NaN);//false

// // 用 var 宣告一個物件
// var product = {
//     name: "apple",
//     count: 100,
// }
// // 

// const product = "100";
// const shipment = 100;
// const total = Number(product) + shipment; //200
// if (product > shipment) {
//     console.log("But it !");
// } else {
//     console.log("Do not buy it!");
// }

// const count = 50;
// switch (count) {
//     case 0:
//     case 1:
//     case 2:
//         console.log("快賣完了！趕快進貨！");
//         break;
//     case 50:
//         console.log("庫存充裕");
//         break;
//     case 100:
//         console.log("是不是賣不後！？")
//         break;
//     default:
//         console.log("運作正常");
//         break;
// }

// console.log(!![])//true
// console.log(!!{}) //true
// console.log(!!NaN) //false


// let product = 5;
// while (product > 0) {
//     console.log("買一個");
//     product--;
//     console.log(`現在還剩 ${product}個。`);
// }
// console.log("全部賣完了");

// let product = 0;
// while (product > 0) {
//     console.log("買一個");
//     product--;
//     console.log(`現在還剩 ${product}個。`);
// }
// console.log("全部賣完了");

// let product = 5;
// do {
//     console.log("買一個");
//     product--;
//     console.log(`現在還剩 ${product}個。`);
// } while (product > 0);
// console.log("全部賣完了");

// let product = 0;
// do {
//     console.log("買一個");
//     product--;
//     console.log(`現在還剩 ${product}個。`);
// } while (product > 0);
// console.log("全部賣完了");

// let product = 5;
// while (product > 0) {
//     console.log("買一個");
//     product--;
//     console.log(`現在還剩 ${product}個。`);

//     if (product === 2) {
//         console.log("停停停，不要賣了！快進貨啊。");
//         break;
//     }
// }
// console.log("全部賣完了");

// let product = 5;
// while (product > 0) {
//     console.log("買一個");
//     product--;

//     if (product === 2) {
//         console.log("第二個我要暗摃起來");
//         continue;
//     }
//     console.log(`現在還剩 ${product}個。`);
// }
// console.log("全部賣完了");

for (let product = 5; product > 0; product--) {
    console.log("買一個");
    console.log(`現在還剩 ${product}個。`);
}
console.log("全部賣完了");