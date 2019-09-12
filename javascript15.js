// function foo() {
//     var a = 2;
//     function bar() {
//         console.log(a);
//     }
//     return bar;
// }

// var baz = foo();
// baz();//2

// function wait(message) {
//     setTimeout(function timer() {
//         console.log(message);
//     }, 1000);
// }
// wait('Hello,閉包！');
// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }

// for (var i = 1; i <= 5; i++) {
//     (function (j) {
//         setTimeout(function timer() {
//             console.log(j);
//         }, j * 1000);
//     })(i)
// }

// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }

// function CoolModule() {
//     var something = 'cool';
//     var another = [1, 2, 3];

//     function doSomething() {
//         console.log(something);
//     }
//     function doAnother() {
//         console.log(angother.join(' ! '));
//     }
//     return {
//         doSomething: doSomething,
//         doAnother: doAnother
//     };
// }

// var foo = CoolModule();
// foo.doSomething();// cool



// var foo = (function CoolModule() {
//     var something = 'cool';
//     var another = [1, 2, 3];
//     function doSomething() {
//         console.log(something);
//     }
//     function doAnother() {
//         console.log(another.join(' ! '));
//     }
//     return {
//         doSomething: doSomething,
//         doAnother: doAnother
//     };
// })();

// foo.doSomething();// cool
// foo.doAnother(); // 1 ! 2 ! 3


var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];// (1)
        }
        modules[name] = impl.apply(null, deps);// (2)
    }
    function get(name) {
        return modules[name];
    }
    return {
        define: define,
        get: get
    };
})();

// bar 沒有需要任何其他的模組…
MyModules.define('bar', [], function barImpl() {
    function hello(who) {
        return 'Let me introduce: ' + who;
    }
    function world() {
        return 'Hello World';
    }
    return {
        hello: hello
    };
});

// foo 需要 bar 模組…
MyModules.define('foo', ['bar'], function fooImpl(bar) {
    var hungry = 'hippo';
    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }
    return {
        awesome: awesome
    };
});

var bar = MyModules.get('bar');
var foo = MyModules.get('foo');

console.log(bar.hello('hippo'));// Let me introduce: hippo

foo.awesome();//LET ME INTRODUCE: HIPPO