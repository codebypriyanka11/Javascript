//  create and access array
 let marks = [34,45,56,78,98];
console.log(marks[1]);


// modify the array
marks[3]=87;
console.log(marks);


// push and pop
marks.push(90);
marks.push(80);
marks.push(50);
marks.push(70);
marks.pop();
console.log(marks);


// shift -> starting se value remove karta hai
marks.shift();
// unshift -> starting me kuch add karta hai
marks.unshift(23);
console.log(marks);


// splice -> bichhe se value remove karta hai
//  (kha se remove karna hai (index Node. do) , kitna remove karna hai)
marks.splice(1,2);
console.log(marks);

// slice new written copy data hai 
// (kha se hatana hai ,kha tak hatana hai)
let arr = [12,4,34,9,56];
let newarr = arr.slice(1,3);
console.log(`before slice  ${arr}`);
console.log(newarr);


// reverse --> main array get change
arr.reverse();
console.log(arr);

// sort --> ya normaly ascending order me hota hai 
arr.sort();
// or is se bi ascending order me hota hai 
let asr = arr.sort(function (a,b){
    return a-b;
})
console.log(asr);
// or is se descending order ma karaya hai
let desr = arr.sort(function (a,b){
    return b-a;
})
console.log(desr);

// . for each function padho
// . map srf tab use karna hai jab aapko ek naya array 
//   banana hai pichhle array ke dta ke basis par
// . map dikhte hi saath man mein ek blank array bana liya karo
// . map for each jasa hi hai , lakin map me return karna jaruri hai
let num = arr.map(function(val){
    return 12;
})
console.log(num);
// agar return nahi likha to undefine ayega
// yaha hamne sirf un num ka liya return likha hai jo 10 se kam hai 
// jyada valo ka liya to kuch likh hi nahi to vaha undefined ayaga
let num1 = arr.map(function(val){
    if (val < 10 ) return val;
})
console.log(num1);
// map kab banaga --> jab bhi aapko aisa koi case dikh jjaye jaha par ek Array
// se naya array banega and wo naya array kuchh values ko rahkega tab map lagega


// filter --> filter bhi map ki tarah ak blank array banata hai or purana array se kuch 
// value lata hai or kuch chood data hai
// filter me ham jis value ko true likhta hai vahi new array me prnt hoti hai
let new3 = arr.filter(function(val){
    if(val > 20) return val;
})
console.log(new3);


// reduce --> maan lo apko saare calculation karna ka bade ak value lani hai 
// use reduce khata hai example sum 
// accumulator --> ak variable hota hai jisse ham is function kai last me seta hai
// accumulator vo variable hai jo baar baar chalana par apni value yaad rakhta hai return hone ka baade bhi
let ans = arr.reduce(function(accumulator,val){
    return accumulator+val;
},0);
console.log(ans);
 

// find --> find us phale value ko return karta hai vo apki condition ko match karta hai or koi value return nahi karega
let ans1 = arr.find(function(val){
    return val ===34;
})
console.log(ans1);

// some --> some ka use ham tab karta hai jab koi value apki condition pass karta hai to ya true return karta hai
// Ex. hame ya jaana ho ki kya is array me hamare input se jyada value vala no hai kya
let ans2 = arr.some(function(val){
    return val >40;
})
console.log(ans2);

// every --> ya saare val k bare me true oe false return according to your condition
let ans3 = arr.every(function(val){
    return val > 40;
})
console.log(ans3);


// destructuring and spread operator
//in destructuring --> maan lijye apko koi value nahi chahiya 
// destructuring
let arr1 = [1,2,3,4,5,6,7,8];
let[a,b,,,c,d,,e,f] = arr1;
// spread operator --> ya ak new array bana dati hai
let arr2 = [...arr1];

// QUESTION AND ANSWER
//Q. create an array with 3 fruits and print the second fruit.
let fruits = ["apple" , "banana" , "mango"];
console.log(fruits[1]);

//Q. add mango in the end and pineapple at the beginning of this array
fruits.push("cherry");
fruits.unshift("pineapple");
console.log(fruits);

// replace banana with kiwi in the above
let fruits1 = ["apple","banana"];
fruits1.pop();
fruits1.push("kiwi");

// insert red and blue at index 1 in this array
let colors = ["green", "yellow"];
colors.splice(1,0,"blue" ,"red");
console.log(colors);

// extract only the middle element from this array
let items = [1,2,3,4,5,6];
let newitems = items.slice(1,4);
console.log(newitems);


// sort this array alphabetically and then reverse items
let names = ["zara ","ananya","mira","bhavya"];
names.sort().reverse();
console.log(names);

// use .map() to square each Number:
let marks1= [67,78, 58,78,98];
let newmarks1 = marks.map(function(val){
    return val*val;
})


// use .filter () to keep numbers greater than 10
let vbn = [5,12,8,20,3];
let newvbn = vbn.filter((val) => {
    return val>10;
})
console.log(newvbn);

// merge two array using spread operator:
let all = [1,2];
let bll =[3,4];
let cll = [...all, ...bll];
console.log(cll);

// add India to the start to the start of this array usung spread
let countries = ["USA","UK"];
countries = ["INDIA", ...countries];

// clone this Array
let wer = [1,2,3,4];
let wer1 = [...wer];


// confussion part 
// splice and slice
// .map and foreach 
// big blunder with .sort

