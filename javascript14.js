// function foo() {
//     console.log(a); // 3
// }

// function bar() {
//     var a = 2;
//     foo();
// }

// var a = 3;
// bar();

function foo() {
    console.log(a); // 3  (not 2!)
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;

bar();