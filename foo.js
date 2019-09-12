import hello from 'bar';//只會載入 bar module 的hello

var hungry = 'hippo';
function awesome() {
    console.log(
        hello(hungry).toUpperCase();
    );
}
export awesome;