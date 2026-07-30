//  function SetDarkOrLight(){
// if(window.matchMedia("(prefers-color-scheme: dark)").matches){
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
//  }else{
//      document.body.classList.add("light");
//      document.body.classList.remove("dark");
//  }

//  } 
// SetDarkOrLight();

// //second option --> same for --> last me hamne jo theme select liya hai dobara open karna par bi vahi rahe ise liya hane if or else ka end me localstorage add kiya hai 
// // agar first option na kam kare to
// if(localStorage.getItem("theme")){
//     document.body.classList.add(localStorage.getItem("theme"));
// }else{
//     SetDarkOrLight();
// }
// window
// .matchMedia("(prefers-color-scheme: dark)")
// .addEventListener("change",function(){
//     SetDarkOrLight();
// });

// // first option--> last me hamne jo theme select liya hai dobara open karna par bi vahi rahe ise liya hane if or else ka end me localstorage add kiya hai 
// document.body.classList.add(localStorage.getItem("theme"));

// // by button
//  let button = document.querySelector("#toggleTheme");
//  let body = document.body;
//  button.addEventListener("click",function (){
// if(body.classList.contains("light")){
//   document.body.classList.remove("light");
//     document.body.classList.add("dark");
//     localStorage.setItem("theme","dark");
// }else{
//     document.body.classList.remove("dark");
//     document.body.classList.add("light");
// localStorage.setItem("theme","light");
// }

//  } )



//  OPTIMIZE WAY
const body = document.body;
const button = document.querySelector("#toggleTheme");

function applyTheme(theme) {
    body.classList.remove("light", "dark");
    body.classList.add(theme);
}

function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

// Load theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme(getSystemTheme());
}

// Listen for system theme changes (only if user hasn't chosen manually)
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
        if (!localStorage.getItem("theme")) {
            applyTheme(getSystemTheme());
        }
    });

// Toggle theme
button.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});