// Scope hai ke aap apne created variable and functions kaha tak use kar sakte hai

// line 1 me ak variable banaya 
// ab us variable ko kha tak use kar sakte hai

// scope -- functional scope ,global scope and block scope 

// functional scope -- function ke ander hi use ho sakta hai
//  global scope -- poore code mein kahi bhi use o skti hai
//  block scope -- {} curly braces mein hi use ho sakta hai



// EXECUTION CONTEXT : MEMORY CREATION AND EXECUTION PHASE
// js sabse phale jaise hi apka function dakhta hai sabse phale js bannaata hai execution Context,  ye ak process hai jo ki do different phase me chalta hai , memory phase and doosre ka name hai execution phase 

// LEXICAL SCOPE AND DYNAMIC SCOPE
// // js me lexical scoping hoti hai -- ki aap kaha par physically available ho ye poori tareeke se depend krta hai ki aapkya access kro paaoge
// example of this
function abcds() {
  let c = 12;
   function defg () {
    console.log(c);
  }
  defg();
}
abcds();
// dynamic scoping example 
let a = 14;
function abcd() {
  console.log(a);
}

function efgh() {
  let a = 13;
  abcd();
}
efgh();

// CLOUSER DEFINITION AND HOW VARIABLES ARE PRESERVED
// clouser hote hai function jo ki parent fun ke andar ho aur andar waala fun return ho raha ho and returning fun use kare parent fun ka koi variable use karta hai

// faayade
// variables ko private kar sakte ho 
// global pollution ko rok sakta ho
function print(){
  let s = 15;
  return function (){
    console.log(s);
  }
}
print();
// jab ham iss print function ko call karte hai to s save hua fir isne ak function ko call kiya or print function khatam ho gaya to iska matlab ab print function nahi raha or s name ka ab koi variable nahi hai to s kasa print ho raha hai 

// ye sach hai fun ke khatam hone pe aapka fun uske variables khtm hojaate hai ,par jab bhi clouser banta hai to aapka fun uske variables ka ek baclink bnaya jaata hai aur uska naam hota hai [[environment]]

// USE CASES : PRIVATE COUNTERS , ENCAPSULATION

//  PRIVATE COUNTERS
function countForMe(){
  let d = 0;
  return function (){
    d++;
    console.log(d);
  }
}
countForMe();
// ya nahi chalaga kyoki jab ham phale bar clouser function chalate hai ti sirf function milta hai or dusri baar chalane par kam karta hai 
let fun = countForMe();
fun();

// ENCAPSULATION
function clickLimit(){
  let click = 0;
  return function(){
    if(click<5){
      click++;
      console.log(`clicked :${click} times`)
    }else{
console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME")
    }
  }
}
let start = clickLimit();
start();
start();
start();
start();
start();
start();









