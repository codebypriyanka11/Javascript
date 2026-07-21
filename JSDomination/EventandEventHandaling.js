// add event
let h1 = document.querySelector("h1")
h1.addEventListener("click",function(){
    h1.style.color = "yellow";
})

// Remove event
let p = document.querySelector("p");
function click (){
    p.style.color = "pink";
}
p.addEventListener("click",click);
p.removeEventListener("click",click);

// common events : click , input ,change , submit , mouseover , keyup

let input = document.querySelector("input");
input.addEventListener("input",function(evt){
    // console.log("typed");
    if (evt.data !== null){
console.log(evt.data);
    }
})

// change --> event tab chalta hai jab aapka koi input select ya textarea mein koi change hojaaye
  let select = document.querySelector("select");
  let device = document.querySelector("#device");
  select.addEventListener("change",function(dets){
    console.log(dets.target.value);
  });
  select.addEventListener("change",function(dets){
    // device.textContent ="Device Selected";
     device.textContent =`${dets.target.value} Device Selected`;
  });

























