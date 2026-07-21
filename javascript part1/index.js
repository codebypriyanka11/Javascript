// var a =12;
// window mein add hota hai 
// function scoped hota hai 
// aap firse declare kr skte ho same se and errror nahi aaayega
// var a=123;

let a = 1;
let b = 3;
if (a < 5 && b > 2) {
    console.log("okay done")
}
else {
    console.log("not done")
}

let hmm = true;
let ppp = false;
if (hmm || ppp) {
    console.log("access granted")
} else {
    console.log("access denied")
}

let temp = 35;
if (!(temp < 30)) {
    console.log("hot")
} else {
    console.log("cold")
}

let c = 0;
if (c) {
    console.log("truth")
} else {
    console.log("false")
}

let score = 78;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "False";
console.log(grade);

let x = 12;
let y = x;
x++;
y = x++;
console.log(x, y)
console.log(y)

let x1 = 12;
let y1 = x1++;
x1++;
y1 = x1++;
console.log(x1, y1)
console.log(y1)

let p = 33;
let q = ++p;
console.log(p, q)

let m = 23;
console.log(m--)
console.log(m)

let r = 5;
//    5    6+1
let result = r++ + ++r;
console.log(result)

let count = 5;
if (count-- === 5) {
    console.log("Matched")
} else {
    console.log("Not Matched")
}

// easy return return
function getval(val) {
    if (val < 25) return "D";
    else if (val < 50) return "C";
    else if (val < 70) return "B";
    else return "A";
}
console.log(getval(78))

// function getscore(score){
//     if(score>=90 && score<=100){
//         return "A";
//     }
//     else if (score>=80 && score<=89){
//         return "B";
//     }
//     else if (score>=70 && score<=79){
//         return "C";
//     }else if (score>=60 && score<=69){
//         return "D";
//     }
//     else if (score>=33 && score<=59){
//         return "E";
//     }
//     else if (score>=0 && score<=32){
//         return "Fail";
//     }
//     else{
//         return "invalid marks"
//     }
// }
// console.log(getscore(67))

function getscore(score) {
    if (score >= 90 && score <= 100) return "A";

    else if (score >= 80 && score <= 89) return "B";
    else if (score >= 70 && score <= 79) return "C";
    else if (score >= 60 && score <= 69) return "D";
    else if (score >= 33 && score <= 59) return "E";
    else if (score >= 0 && score <= 32) return "Fail";
    else return "invalid marks"

}
console.log(getscore(332))


function rps(user, computer) {
    if (user === computer) return "draw";
    if (user === "rock" && computer === "scissor") return "user win";
    if (user === "scissor" && computer === "rock") return "computer win";
    if (user === "paper" && computer === "rock") return "user win";
    if (user === "rock" && computer === "paper") return "computer win";
    if (user === "scissor" && computer === "paper") return "user win";
    if (user === "paper" && computer === "scissor") return "computer win";
}
rps("rock", "scissor")
console.log(rps("scissor", "scissor"))



function rps(user1, computer1) {
    if (user1 === computer1) return "draw";
    if (user1 === "rock" && computer1 === "scissor") return "user win";
    if (user1 === "paper" && computer1 === "rock") return "user win";
    if (user1 === "scissor" && computer1 === "paper") return "user win";
    return "computer win";
}
rps("rock", "scissor")
console.log(rps("scissor", "scissor"))

