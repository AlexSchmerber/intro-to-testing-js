// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    if(typeof(input) !== "string"){
        return helloWorld();
    } else {
            return "Hello, " + input + "!";
    }
}
