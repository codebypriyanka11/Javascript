//  select element : getElementById , getElementByClassName , querySelector , querySelectorAll 
// let abcd = document.getElementById("abcd");
// console.dir(abcd);

// let qwe = document.getElementsByClassName("qwe");
// console.dir(qwe);

// ya sirf first h1 ko access karega
let abcd = document.querySelector("h1");
console.dir(abcd);

// ya sare h1 ko access karega 
let qwe = document.querySelectorAll("h1");
console.log(qwe);

let h2 = document.querySelector("h2");
h2.innerText = "sahi hai bhai";
h2.innerHTML = "sahi hai bhai1";
h2.textContent = "sahi hai bhai2";



// Attribute Manupulation : getAttribute,setAttribute,removeAttribute
let a = document.querySelector("a");
// a.href ="https://www.google.com";
  a.setAttribute("href","https://www.facebook.com");
       console.log(a.getAttribute("href")); 
a.removeAttribute("href");

// Dynamic DOM manipulation : createElement-->new element add karna
// ,appendChild-->ak element par extra element add karna
// ,removeChild-->ak element se ak element remove karna
// ,prepend--> kisi element ki suruat me kuch add karna   
// document.createElement("h1")--> ya likhna se sirf banck h1 create hoga
// lakin let h1 (variable ka use kar ke ham )-->ab h1 ko screen par bi dakh sakte hai
let h1 = document.createElement("h1");
h1.innerHTML ="hey it's me Miss. Priyanka"
// ye last me add hoga
document.body.append(h1);
// ye suruat me add hoga
document.body.prepend(h1);
// asa bi kar sakte ho
document.querySelector("body").prepend(h1);

// Remove element
let hE = document.createElement("h2");
hE.innerHTML ="hey how are you";
document.querySelector("div").appendChild(hE);

// style updates via .style and classList (add,remove,toggle)

hE.style.color = "red";
hE.style.backgroundColor = "brown";
hE.style.textTransform = "capitalize";

// add and remove class
hE.classList.add("abcd");
hE.classList.remove("abcd");
hE.classList.toggle("abcd");
console.dir(hE);

// confusion :
// diff. b/w innerText vs textContent vs innerText
// live HTMLCollection vs stastic NodeList

//Q what is the DOM? how does it represent the HTML structure
// Q name the types of nodes in the DOM tree
//  Q what is the diff. b/w getElementById and querySelector
// Q what does getelmentbyclassname return ? is it an array?
// ans. htmlcollection hota hai

// Q select all <li> element and print their text using a loop.
let lis = document.querySelectorAll("li");
console.log("first way")
lis.forEach(function(val){
  console.log(val.textContent);
})
// other way
console.log("second way")
for(let i = 0; i< lis.length; i++){
  console.log(lis[i].textContent);
}

// Q select a paragrap and replace its content with:
// "<b>updated</b> by JavaScript"
let p = document.querySelector("p");
  p.innerHTML="<b>updated</b> by JavaScript";
 
// Q how do you get the src of an image using javaScript
  let img = document.querySelector("img");
  console.log(img.src);
console.log(img.getAttribute("src"))
// image get change
img.setAttribute("src","https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg")
document.querySelector("img").setAttribute("src","https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg");





