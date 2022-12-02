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

function isFive (param) {
    if(param === 5) {
        return true;
    } else{
        return false;
    }
}

function isEven (param) {
    if(param % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function isVowel (char) {
    let vowels = "aeiouAEIOU"
    if (vowels.includes(char)){
        return true
    }
    return false
}

function add (firstNum, secondNum) {
    return parseFloat(firstNum * 1 + secondNum * 1)
}

