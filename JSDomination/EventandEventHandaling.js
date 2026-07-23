// add event
let h1 = document.querySelector("h1")
h1.addEventListener("click", function () {
    h1.style.color = "yellow";
})

// Remove event
let p = document.querySelector("p");
function click() {
    p.style.color = "pink";
}
p.addEventListener("click", click);
p.removeEventListener("click", click);

// common events : click , input ,change , submit , mouseover , keyup

let input = document.querySelector("input");
input.addEventListener("input", function (evt) {
    // console.log("typed");
    if (evt.data !== null) {
        console.log(evt.data);
    }
})

// change --> event tab chalta hai jab aapka koi input select ya textarea mein koi change hojaaye
let select = document.querySelector("select");
let device = document.querySelector("#device");
select.addEventListener("change", function (dets) {
    console.log(dets.target.value);
});
select.addEventListener("change", function (dets) {
    // device.textContent ="Device Selected";
    device.textContent = `${dets.target.value} Device Selected`;
});


//   TASK 1
//   HAM CHAHATA HAI KI AGAR HAM KOI SA BI KEYWORD DABAYE TO VO SCREEN PAR SHOW HO
let h2 = document.querySelector("h2")
 window.addEventListener("keydown",function(dets){
    console.log(dets.key);
    if(dets.key === " "){
        h2.textContent = "SPC";
    }else{
h2.textContent = dets.key;
    }

 })
// TASK 1 END HERE

// TASK 2
let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");
btn.addEventListener("click", function () {
    fileinp.click();
})
// fileinp.addEventListener("change",function(dets){
//     // console.log(dets);
//     btn.textContent = dets.target.files[0].name;  
// })
// more perfect way
fileinp.addEventListener("change", function (dets) {
    const file = dets.target.files[0];
    if (file) {
        btn.textContent = file.name;
    }
})
// TASK 2 END HERE

// TASK 3
let form = document.querySelector("form");
let inputs = document.querySelectorAll(".input")
let main2 = document.querySelector("#main2");
form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    let card = document.createElement("div");
    card.classList.add("card");
    let profile = document.createElement("div");
    profile.classList.add("profile");
    card.appendChild(profile);
    console.log(card);
    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);
    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;
        let h5 = document.createElement("h5");
        h5.textContent = inputs[2].value;
            let p= document.createElement("p");
            p.textContent = inputs[3].value;



      profile.appendChild(img);  
      card.appendChild(profile);
      card.appendChild(h3);
            card.appendChild(h5);   
                  card.appendChild(p);
                  main2.appendChild(card);
inputs.forEach(function(inp){
    if(inp.type !== "submit"){
        inp.value ="";
    } 
})

});











