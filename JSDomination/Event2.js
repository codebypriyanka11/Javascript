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
});
b.addEventListener("click",function(){
    console.log("b clicked");
});
c.addEventListener("click",function(){
    console.log("c clicked");
});






