// var a =12;
// window mein add hota hai 
// function scoped hota hai 
// aap firse declare jr skte ho same se and errror nahi aaayega
// var a=123;

let a=1;
let b=3;
if(a<5 && b>2){
    console.log("okay done")
}
else{
    console.log("not done")
}

let hmm=true;
let ppp=false;
if(hmm || ppp){
    console.log("access granted")
} else{
    console.log("access denied")
}

let temp = 35;
if(!(temp<30)){
    console.log("hot")
}else{
    console.log("cold")
}

let c = 0;
if(c){
    console.log("truth")
}else{
    console.log("false")
}

let score = 78;
let grade = score>=90 ? "A" : score>=75 ? "B" : score >= 60 ? "C" :"False" ;
console.log(grade);

let x =12;
let y =x;
x++;
y=x++;
console.log(x,y)
console.log(y)

let x1 =12;
let y1 =x1++;
x1++;
y1=x1++;
console.log(x1,y1)
console.log(y1)

let p = 33;
let q = ++p;
console.log(p,q)

let m =23;
console.log(m--)
console.log(m)

let r = 5;
        //    5    6+1
let result = r++ + ++r ;
console.log(result )

let count = 5;
if(count-- ===5){
    console.log("Matched")
}else{
    console.log("Not Matched")
}








