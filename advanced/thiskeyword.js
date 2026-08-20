//   this keyword ak special special keyword hai , jase ki sare keyword ki value ya unke nature same rehta hai this ki value ya nature badal jaata hai iss baat se ki aap ise kha use kar raha ho  
//  global scope iss ne iski value window hoti hai
console.log(this);

// in function me bi
function abcd(){
    console.log(this);
}
abcd();

// method = ak asa function jo object ka andar ho 
// me this key apka object ho jata hai
let obj = {
    name : "Priyanka",
    saysomething : function(){
        console.log(this);
        console.log(this.name);
    }
}
obj.saysomething();
// FIRST CASE
// agar ham arrow function use kare to ab this keyword ab obj na hokar window ban jayega
// NOTE --> jo arrow function hai vo this ki value  apna parent se late hai isliys yaha arrow fun ka prent object hai or uska this function window hai

let obj1 = {
    age : 21,
    tellmesomething : () => {
        console.log(this);
    },
};
obj1.tellmesomething();
// SECOND CASE
//  aap function ka ander function hai to vo fir se window ban jayega 
// yaha arrow fun ka parent function hai jiska this object hai
let obj3 = {
    course :" B.tech IT " ,
    details : function (){
        function defg(){
            console.log(this);
        }
        defg();
    },
};
obj3.details();
// OR AGAR AAP KO SECOND CASE SE BACHNA HAI TO --> inner function me arrow function use kare 
let obj4 = {
    height : 5.2,
    thought : function(){
        let qwer = () => {
            console.log(this); 
        }
    }
}



// event handler -->addEventListner me this keyword hamara vo hota hai jis par apka eventListener laga hai

document.querySelector("div").addEventListener("click",function(){
    alert();
    console.log(this);
    console.log(this.style.color = "red");
})

// class --> this ki value blank hoti hai
class Abcd{
    constructor(){
        console.log("heyhey");
        this.a = 12;
    }
}
let val = new Abcd();

// this ki value 
// -----------------------------
// global - window 
// function - window 
// method with es5 fun - object 
// method with es6 arrow fun - window 
// es5 function inside es5 fun method - window 
// arrow function inside es5 fun method - object
// event handler - element 
// class - blank object 
 
// Arrow function and lexical this.
// arrow function already done


// MANUAL BINDING: BLIND,CALL,APPLY
//  function ko call karte waqt aap set kr skte ho ki uski this ki value kya hogi
let hell = {
    type : "devil",
};

function rate(a,b,c){
    console.log(this,a,b,c);
};
rate();
// yaha this ki value window hogi lakin ham chahate hai ki iss ki value object h jaye 
// USING CALL -->  call me ham jo bi object pass karege vo us this ki value ho jayegi
rate.call(hell,1,2,3);

// APPLY --> apply ka rule hai agar aap ak se jyada parameter baj rahai ho to aap function.apply(parameter1,[parameter2]) me too parameter hi bajoge 1 apko fun ka this ka liya or dusra parameters ki values ka liya
let hell1 = {
    type : "devil 1",
};

function rate(a,b,c){
    console.log(this,a,b,c);
};
rate.apply(hell1,[4,5,6]);

// BIND --> it is same as call , ak fun ki copy create karta hai jis me this ki value vo obj hota jise ham paas karta hai.
let hell2 = {
    type : "devil 2",
};

function rate(a,b,c){
    console.log(this,a,b,c);
};
 let hellOrder = rate.bind(hell2,7,8,9);
 hellOrder();
