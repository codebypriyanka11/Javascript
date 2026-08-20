let nm = document.querySelector("#name");
let fm = document.querySelector("form");
fm.addEventListener("submit", function (dets) {
    dets.preventDefault();
    if (nm.value.length <= 2) {
        document.querySelector("#hide").style.display = "initial";

    }
    else {
        document.querySelector("#hide").style.display = "none";
    }
    // to check the email is valid or not
const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
let ans = regex.test("priyanak@test.com")
console.log(ans);
})




























