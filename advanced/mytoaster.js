function myToaster(config){
    return function ( notification ){
        let div = document.createElement("div");

        div.className = `inline-block px-6 py-3 rounded shadow-lg pointer-events-none 
        ${config.theme === "dark" ? "text-white bg-gray-800" : "text-black bg-gray-100"}
         
         ` ;

        div.textContent = notification;
        document.querySelector("#parent").appendChild(div);

        if(config.positionX !== "left" || config.positionY !== "bottom"){
           
            document.querySelector("#parent").className += `${config.positionX === "right" ? " right-10" : "left-10"} ${config.positionY === "bottom" ?  "bottom-10" : "top-10" }`;
        }else{
            document.querySelector("#parent").className += `left-10 bottom-10`
        }

        setTimeout(() => {
              document.querySelector("#parent").removeChild(div);
        },config.duration*1000)
    }
}
let toaster = myToaster({
    positionX : "left",
    positionY : "bottom",
    duration : 3,
    theme : "dark",
});
toaster("Download done");
toaster ("hello")
// if you want to add another one 
setTimeout(() => {
toaster("Second Download done")
},2000);