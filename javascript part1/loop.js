
// kaha se jaana hai -> kaha tak jaana hai -> kaise jaana hai
// for 

// kaha se jaana hai -> kaha rukna hai -> kaise jaana hai
// while 

// for (start ; end ; change ){

// }



// start
// while(end){
//     change
// }

for(let i=1; i<=10; i++){
   console.log(i);
}

for(let i=10; i>=0; i--){
   console.log(i);
}

let r=1;
while(r<=15){
    console.log(r);
    r++;
}

let p=15;
while(p>=1){
    console.log(p);
    p--;
}

for(let i=1; i<21;i++){
    if(i%2===0){
        console.log(i);
    }
}


r=1
while(r<=15){
    if(r%2 === 1){
        console.log(r);
    }
    r++;
}

// table of 5
for (let i=1 ; i<=10 ; i++){
    console.log(`5 * ${i} = ${5*i }` );  
}

// sun of first 100 num
let sum = 0;
for(let i=1 ; i<=100 ;i++){
sum = sum + i ;
}
console.log(sum); 

// num divisible by 3
for(let i = 1; i<=50 ; i++){
    if(i%3===0){
        console.log(i);
    }
}

// print number is odd or event from 1 to 100
let val = prompt("give me a number");
for (let i=1 ;i<=val ; i++){
    if(i%2 ===0 ){
        console.log(`${i} is even`);
    }else{
console.log(`${i} is odd`);
    }
    
}

// numbers divisible by 3 and 5
for(let i=1; i<=100;i++){
    if( i%3 ===0 && i%5 ===0){
        console.log(i);
    }
}

// write a loop from 1 to 100 that :
//    . print each number 
//    . stop completely when it finds the first number divisible by 7

// yaha par 7 se phale tak ka no print honge
for(let i=1 ; i<=100 ; i++){
    if(i%7 ===0){
        break;
    }
    console.log(i);
}

// 7 bi print hoga
for(let i=1 ; i<=100 ; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
    
}

// write a loop from 1 to 20 that :
//     . skips number divisible by 3 
//     . print all others 

//     use cindition 
for(let i=1; i<=20 ;i++){
    if(i%3 ===0) continue;
        
        console.log(i)
    
}


// print first 5 odd numbers only 
// write a llop frm 1 to 100 that 
//     . print only 5 odd numbers 
//     . then stops the loop 
//     use both if continue and a counter + break 
let count = 0;
for(let i = 1; i<=100; i++){
    if(i%2 ===1 ){
count++;
console.log(i);
    }
    if(count===5) break;
}




