
// function declaration
function fun(){
    console.log("hello world");
}
  fun()


// functoin expression
let hel= function(){
    console.log("heyyyyy")
}
hel()

// fat arrow function
let fan = () => {
    console.log("hmmmm")
}
fan()

function dance(v1){
    console.log(`${v1} is dancing`);
}
dance("donkey");
dance("monkey");

// default parameter
function add(v1=0,v2=0){
    console.log(v1 + v2);
}
add(1,2);

// jab argument kai saare value ho to humein utna hi para 
// meter lana padta hai isse bachna ke liya hu rest ka use
//  karte hai ... agar ... function ke parameter space mein
//  lage to wo rest operator hai and agar wo arrays and objects
//  mein lade to wo spread operator hai
function abcd(...val ){
    console.log(val)
}
abcd(1,2,3,4,5,6,7,8,9);

// return and early return
    function abcd(v){
        return 12 +v;
    }
    let val = abcd(23);
    console.log(val);

// first class function --> function ko value ki tarah treat kar sakte ho
function abce(value){
value();
}
abce(function(){
    console.log("hey");
})

// high order function   aise fun jo ki return kare ak function ya fir 
// accept kara ak function apna ak parameter me
function asdf(){
    return function(){
        console.log("hello");
    }
}
asdf()();

// pure and impure functions  

//  jo bhar ki value ko na badle vo pure function
let a =20;
function first(){ 
    console.log("heyhey")
}
first()
// jo bhar ki value ko badal de vo impure function
function hui(){
    a++;
    console.log(a)
}
hui()


// closures  ek function jo return kare ek or function 
// aur return hone waala function hamesha  use karega
//  parent func ka koi variable
function second(){
    let a =12;
    return function(){
        console.log(a);
    }
}
second();


// lexical scoping
function third(){
    let a =12;
    function fourth(){
        let b =23;
        function fifth(){
            let c =34;
        }
    }
}


// IIFE(immediately invoked function expression)
(function(){
console.log("asdf")
})();


// hoisting differences between declaration and expresssion

// function declaration me hosting work karti hai
sixth()

function sixth(){
    console.log("sixth");
}

// not in finction expression -> error ayega 
// seventh();


// let seventh = function(){
//     console.log("seventh")
// }


// Q1. what is the difference between function 
// declaration and expression in terms of hosting
// 113-128 tak 


// Q2. convert a function into a arrow function
function multiply(a,b){
    return a * b;
}

let multiply1 =(a,b) => {
    return a * b;
};

//Q3. identify parameter and argument
function welcome(name){
    console.log(name);
}
welcome("priyanka");
// ans3. name in function declaration is parameter and priyanka is argument


//  use rest parameter to accept any number of scores and return tne total
function getScore(...scores){
    let total = 0 ;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}
console.log(getScore( 10, 20, 30, 40 ,50));
  


function outer(){
    let count = 0 ;
    return function(){
        count++;
        console.log(count);
    }
}
const counter=outer(); 
counter();
counter();


// practice section
// write a BMI calculator
function bmi (weight,height) {
    return weight/(height*height);
}
// console.log(Math.round(bmi(56,5.2)))
console.log(bmi(56,5.2).toFixed(2));

// create a reusable discount calculator (HOF)
function discountCalculator(discount){
    return function(price){
return price -price*(discount/100);
    };
}
let discounter = discountCalculator(25);
console.log(discounter(250));
let ten = discountCalculator(10);
let twenty = discountCalculator(20);
console.log(ten(200))


// build a counter using clouser
function counter1(){
    let count =0 ;
    return function(){
        count++;
        return count;
    };
}
// console.log(counter1()());
let c = counter1();
console.log(c());


// create a pure function to transform a value
function double(val){
    return val * 2;
}
console.log(double(6));


// IIFE
(function (){
    const password = "secretpassward";
    console.log(password);
})();
// ham ise bahar access nahi kar sakte
console.log(password);






















