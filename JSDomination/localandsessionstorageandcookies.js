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

localStorage.setItem("Name","priyanka");

let val = localStorage.getItem("Name");
console.log(val);

localStorage.removeItem("Name");

localStorage.setItem("class","b.tech");
localStorage.setItem("class","b.tech IT");