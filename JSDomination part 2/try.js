let main = document.querySelector("#main");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
form.addEventListener("submit",function(evl){
    evl.preventDefault();
    let card = document.createElement("div");
    card.classList.add("card")
let profile = document.createElement("div");
profile.classList.add("profile");
card.appendChild(profile);
let h3 = document.createElement("h3");
h3.textContent = input[1].value;
let h5 = document.createElement("h5");
h5.textContent = input[2].value;
let p = document.createElement("p");
p.textContent = input[3].value;
let img = document.createElement("img");
img.setAttribute("src",input[0].value);
profile.appendChild(img);
card.appendChild(profile);
card.appendChild(h3);
card.appendChild(h5);
card.appendChild(p);
main.appendChild(card);
input.forEach(function(inp){
    if(inp.type !== "submit")
    {
        inp.value="";
    }
})
})


// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor = "yellow";
// })
// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor = "red";
// })
// window.addEventListener("mousemove",function(evt){
//     abcd.style.top = evt.clientY + "px";
//     abcd.style.left = evt.clientX + "px";
// })


let ul = document.querySelector("ul");
// ul.addEventListener("click",function(dets){
//     dets.target.classList.toggle("lt");
// })

// ul.addEventListener("click",function(dets){
//     dets.target.style.textDecoration = "line-through";
// })

let li = document.querySelectorAll("li");
li.forEach(function(item){
// item.addEventListener("click",function(dets){
//     dets.target.style.textDecoration = "line-through"
// })

item.addEventListener("click",function(dets){
    dets.target.classList.toggle("lt")
})
})




