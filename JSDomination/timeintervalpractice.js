            //  DOWNLOADER

let progress = document.querySelector(".progress");
let count = 0;
let seconds = 5;
let button = document.querySelector("button");
let percent = document.querySelector(".percent")
button.addEventListener("click",function(){
let intv = setInterval(() => {
if(count < 100){
    count++;
    progress.style.width = `${count}%`;
    percent.textContent = `${count}%`
    percent.style.display = "initial"
}
else{
    document.querySelector(".status").textContent = "Downloaded."
    document.querySelector(".status").style.textAlign = "center";
    percent.style.display = "none"
clearInterval(intv);
}
},(seconds * 1000)/100);
})

// DOWNLOADER CODE END HERE



// AUTO HIDE ALERT BANNER AFTER 3s