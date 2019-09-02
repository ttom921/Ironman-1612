// let a = 10;
// do {
//     a--
// } while (a > 1);

// const a = 2;
// try {
//     a = 4;
// } catch (e) {
//     console.log(e);//TypeError: Assignment to constant variable
// }

// {
//     a = 2;
//     let a;
// }

// {
//     typeof a;// undefined
//     typeof b;// ReferenceError! (TDZ)
//     let b;
// }

// function foo() {
//     try {
//         return 12345;

//     } finally {
//         console.log('Hello World');
//     }
// }
// console.log(foo());

// function foo() {
//     try {
//         console.log('Hello World');
//     } finally {
//         return 12345;
//     }
// }
// console.log(foo());


// const count = 50;
// switch (count) {
//     case 0:
//     case 1:
//     case 2:
//         console.log('快賣完了！趕快進貨！')
//         break;
//     case 50:
//         console.log('庫存充裕');
//         break;
//     case 100:
//         console.log('是不是賣不掉了！？');
//         break
//     default:
//         console.log('運作正常');
// }

var a = '12345';
switch (true) {
    case a == 10:
        console.log("10 or '10'");
        break;
    case a == 12345:
        console.log("12345 or '12345'")
        break;

    default:
        //不會到達這裡的
        break;
}