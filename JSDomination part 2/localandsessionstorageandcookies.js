// lockal storage --> aapka browser ke andar storage karna
//  jo ki browser band hone par bhi delete nahi hoga 

// session storage --> ya aapka data temporarily store karta hai 
// matlab ki tab band hua aur data gayab 

// cookies --> ye bhi data store karta hai and aapka data 
// browser ke cookies naam ki properties mein save hota hai and ye cookie 
// kam data or light data ka liya hota hai

// locla Storage --> me ham browser se baat karta hai
// storage kaise karna hai -- setitem
// data fetch kasa karna hai -- getitem
// remove kase karna hai  -- removeitem
// update kasa karna hai -- set item 



// LOCAL STORAGE 


localStorage.setItem("Name","priyanka");

let val = localStorage.getItem("Name");
console.log(val);

localStorage.removeItem("Name");

localStorage.setItem("class","b.tech");
localStorage.setItem("class","b.tech IT");
localStorage.clear();


// SESSION STORAGE -- ya sab apko console me karna hai


sessionStorage.setItem("text","hello everyone");

sessionStorage.setItem("text 1","hello everyone 1");

let text = sessionStorage.getItem("text");
console.log(text);

sessionStorage.removeItem("text 1");

sessionStorage.setItem("text 2","hey how are you")
sessionStorage.setItem("text 2","hey how are you ! are you ok ")
sessionStorage.clear();


// COOKIES -- 4 KB DATA STORE HOTA HAI
// OR LOCAL OR SESSION ME 5MB TAK KA 

//  cookies mein jo bhi data  store karoge wo data reload par automatically server par jaayega 


document.cookie = "email=priyanka@test.com";

document.cookie = "text=hey i am here"

// agar ham apna local storagr me array ya object add karna ki kosis karte hai to vo string me hi convert ho jata hai

// array
 let friends = localStorage.setItem("friends",["rahul","mohit","rohan"]);
console.log(friends);

// object
let friends1 = localStorage.setItem("friends",{one : "rohan",two :"radhika",three : "rani"});
console.log(friends1);
localStorage.clear();
// solution  is JSON.stringify() ya kisi bi chiz ka string bana deta hai jise ham localstorage me paas karta hai or fir lata time JSON.parse karta hai 

localStorage.setItem("friends",JSON.stringify(["rahul","mohit","rohan"]))
let fr = JSON.parse(localStorage.getItem("friends"));
console.log(fr);