let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector("#emailError").textContent ="";
    document.querySelector("#passwordError").textContent = "";
     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;
let emailans = emailRegex.test(email.value);
let passwordans = passwordRegex.test(password.value);
let isValid = true;
if(!emailans){
    document.querySelector("#emailError").textContent = "Email is incorrect";
    // document.querySelector(".error").style.display = "initial"
    document.querySelector("#emailError").style.display = "initial";
     isValid = false;
}
else{
    document.querySelector("#emailError").style.display = "none";
}
if(!passwordans){
    document.querySelector("#passwordError").textContent = "password is incorrect";
    //  document.querySelector(".error1").style.display = "initial"
     document.querySelector("#passwordError").style.display = "initial";
     isValid = false;
}
else{
     document.querySelector("#passwordError").style.display = "none";
}
if(isValid){
    document.querySelector("#message").textContent ="Everything is correct"
}

})

// common confusion
// value vs textContent
















