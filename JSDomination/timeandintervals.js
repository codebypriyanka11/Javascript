// format of setTimeout
// setTimeout(function(){},miliseconds(1000 mean 1 second))
setTimeout(() => {
    console.log("hello")
}, 1000);

// set inteval -- har timeout ke bade fir chalata hai repeat hota hai there is no difference between the format of settimeout and setinterval
setInterval(function(){
    console.log("hey brother")
},5000);

// clearTimeout and clearInterval
let tm = setTimeout(() => {
    console.log("hello1");
}, 2000);
clearTimeout(tm);

let tmI = setInterval(() => {
    console.log("hey brother1")
},5000);
clearInterval(tmI);

// let count = 10 ;
// let interval = setInterval(() => {
//     if(count>=1){
// count--;
//     console.log(count);
//     }
//     else{
//         clearInterval(interval);
//     }
    
// }, 1000);
// other way to do this
let count = 10 ;
let interval = setInterval(() => {
    if(count>=0){

    console.log(count);
    count--;
    }
    else{
        clearInterval(interval);
    }
    
}, 1000);

// Real use : delaying UI actions, auto-refresh


