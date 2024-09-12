function welcome(){
    console.log('Welcome to the class!');
}

function greet(name){
    console.log(`Hello, ${name}`)
}

//function as expression
var welcome = function(){
    console.log('Welcome to the class!');
}

//Arrow function
var welcome = () => console.log('Welcome to the class!');
var greet = (name) => {console.log(`Hello, ${name}`)};
//one para-parenthesis optional else mandatory
//one statement than curly braces optional else mandatory

var add = (a, b) => a + b

var add = (a, b) => {
    return a + b
}


function print(a, b, ...c){
    console.log(arguments);
    console.log(a);
    console.log(b);
    console.log(c);
}
