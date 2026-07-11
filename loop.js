
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

let sum = 0;
for(let i=1 ; i<=100 ;i++){
sum = sum + i ;
}
console.log(sum); 


for(let i = 1; i<=50 ; i++){
    if(i%3===0){
        console.log(i);
    }
}

let val = prompt("give me a number");
for (let i=1 ;i<=val ; i++){
    if(i%2 ===0 ){
        console.log(`${i} is even`);
    }else{
console.log(`${i} is odd`);
    }
    
}


for(let i=1; i<=100;i++){
    if( i%3 ===0 && i%5 ===0){
        console.log(i);
    }
}