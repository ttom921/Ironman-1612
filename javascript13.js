// console.log(a);
// var a = 2;

// var a;// 編譯時期確認 a 屬於全域範疇，但不賦值，所以此刻變數所帶的值是 undefined

// console.log(a);// 得到 unddefined
// a= ？;// 執行時期才會知道 a 的值是什麼

// foo(); // TypeError
// bar(); // ReferenceError

// var foo=function bar() {
//     //...
// };

// var foo;

// foo(); // TypeError
// bar(); // ReferenceError
// var foo = function bar() {
//     var bar =...self...
//     //...
// };

// <script>foo();</script>

// <script>
//     function foo(..) { }
// </script>

// <script>
//     foo();
//     function foo(..) { }
// </script>

// foo();// 1
// var foo;
// function foo() {
//     console.log(1);
// }
// foo = 2;


foo(); //3 
function foo() {
    console.log(1);
}
function foo() {
    console.log(2);
}
function foo() {
    console.log(3);
}



