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

//  title -- se jab aap us par hover karoge to wo tittle show hoga 
let div1 = document.querySelector(".div1");
div1.setAttribute("title","some info")

let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// can you remove an element using removechid?
document.querySelector(".div1").removeChild(document.querySelector(".div2"));

// add a li item to ul 
let ul = document.querySelector("ul");
let li1 = document.querySelector("li");
li1.textContent = "new text";
ul.appendChild(li1);

// create a img and add it to body and also give class to it
let img1 = document.createElement("img");
img1.setAttribute("src","data:image/jpeg;base64,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")
img1.classList.add("placeholder");
document.querySelector("body").prepend(img1);

// select the first item in a list and delete it from the DOM?
let ul1 = document.querySelector("ul");
let li = document.querySelector("li");
console.log(ul.removeChild(li));

// add a highlight class to every even item in a list

let li2 = document.querySelectorAll("ul li:nth-child(2n)");
li2.forEach(function(elem){
  elem.classList.add("highlight")
})

// toggle a class active on a button when clicked (hint: use classlist.toggle()).

// set the font size of all <p> element to 180px using .style
let p2 = document.querySelectorAll("p");
p2.forEach(function (vale) {
  vale.style.fontSize = "4   0px";
});
















