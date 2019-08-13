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

console.log(NaN > NaN);//false
console.log(NaN < NaN);//false
console.log(NaN === NaN);//false
console.log(NaN == NaN);//false