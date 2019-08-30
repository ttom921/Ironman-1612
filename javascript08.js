// const a = 1 + 2;//(1)
// const b = a + 3;//(2)
// b;//(3)

// let a = 1;
// let b = --a++;
// b;

// function checkVowels(str) {
//     let matches;
//     if (str) {
//         matches = str.match(/[aeiou]/g);
//         if (matches) {
//             return matches;
//         }
//     }
// }
// console.log(checkVowels('Hello World'));

// function checkVowels(str) {
//     let matches;
//     if (str && (matches = str.match(/[aeiou]/g))) {
//         return matches;
//     }
// }
// console.log(checkVowels('Hello World'));

// function checkVowels(str) {
//     let matches;
//     return str && (matches = str.match(/[aeiou]/g)) ? matches : undefined;
// }
// console.log(checkVowels('Hello World'));

// const a = { name: 'Jack', foo: function () { } };
// const foo = ({ name }) => {
//     console.log(`Hi, I am ${name}`);
// }
// foo(a);

// if (a) {
//     // ..
// } else if (b) {
//     // ..
// } else {
//     // ..
// }

// if (a) {
//     // ..
// } else {
//     if (b) {
//         // ..
//     } else {
//         // ..
//     }
// }

const flag = true;
function foo() {
    console.log('try me');
}
flag && foo();//


