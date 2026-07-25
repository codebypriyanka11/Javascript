// Event bubbling
document.querySelector("#nav")
.addEventListener("click",function(){
    alert("clicked");
})

// here we apply style property on ul that hoe li inherit kar le 

// let ul = document.querySelector("ul");

// first way
// ul.addEventListener("click",function(dets){
//     dets.target.style.textDecoration = "line-through";
// })

// second way
// ul.addEventListener("click",function(dets){
//     dets.target.classList.toggle("lt");
// })


// here we apply property directly on lists element by using for each loop
let lis = document.querySelectorAll("li");
lis.forEach(function(li){

    // first way
    // li.addEventListener("click",function(dets){
    //     dets.target.style.textDecoration = "line-through";
    // })

    // second way
     li.addEventListener("click",function(dets){
        dets.target.classList.toggle("lt");
    })
})
// event bubbling end here

// event capturing
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("#btn3");

btn.addEventListener("click",function(){
    console.log("button clicked");
});
a.addEventListener("click",function(){
    console.log("a clicked");
},
true);
b.addEventListener("click",function(){
    console.log("b clicked");
},
true);
c.addEventListener("click",function(){
    console.log("c clicked");
},true);
// *jab bhi app click karte ho ya koi bhi envent raise karta ho to aapka jo event flow hai do phase mein chalta hai:
// phase 1 : event top level element se neecha ki taraf aayega 
// phase2 2 :  event raised  element se parent element ki taraf aayega 

// *aur phale phase 1 hota hai
//  
// *agar ham chahate hai ki phale phase 1 ho or phir phase 2 ho to hame capture phase on karna padaga
// * iska liya bas curley brasis ka bade Comma (,) and true likhna hai

let ipt = document.querySelector(".input1");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
ipt.addEventListener("input",function(){
    console.log("input hua hai");
    // console.log(ipt.value.length);
    span1.textContent = ipt.value.length;
    //  span2.textContent = 20-ipt.value.length;
    let left = 20 - ipt.value.length;
    span2.textContent = left;
    if(left < 0){
        span2.style.color = "red"

    }else{
        span2.style.color = "black";
    }
}
)


// comman confusion
// 1. events vs listener
// 2. capturing vs bubbling