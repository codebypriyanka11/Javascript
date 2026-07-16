let obj = {
name:"Priyanka",
age:21,
khaana: "daal chaawal",
}
console.log(obj["khaana"]);

// how to add something in object
// yaha aa se hamne name se access kiya or fir name ki value bi mil gaye
let aa = "name";
obj[aa];

// nesting and deep access
let user = {
    name : "priyanka",
    address : {
        city : "sonipat",
        pin : 131001,
        location :{
            lat:23.2,
            lng:77.4,
        },
    },
};
console.log(user.address.location.lng);

// object destructuring --> to access variable directly
let {lat,lng} = user.address.location;
console.log(lng);

for (let key in obj){
    // to access only key
    // console.log(key);
    // to access both key and value
console.log(key,obj[key]);
}

// Object.KEYS METHOD
Object.keys(obj);
console.log( Object.keys(obj));

// Object.entries METHOD
Object.entries(obj);
console.log(Object.entries(obj) );

// Copying objects : spread , object.assign,deep clone
// spread
let obj1 = {...obj};
console.log(obj1);

// object.assign --> use to copy another object
 let obj2 = Object.assign({},obj);
let obj3 = Object.assign({price : Infinity},obj);

// deep clone
//Why we use deep clone--> jab ham nested obj ko copy karte hai chahe wo spred 
// operator ka through kyo na ho apka ander ka nested obj, copy ki hui 
// obj ka kaaran change ho sakte hai iseliya ham deep clone karta hai
// let user1 = {...user};
// user1.address.city = "panipat";
// console.log(user1);
// console.log(user);
// DEEP CLONE
let user2 = JSON.parse(JSON.stringify(user));
user2.address.city = "panipat";

// optional chaining and computed properties
// optional chaining 
let user1 = {...user};
user1.address.city="jind";
console.log(user1?.address?.city)

// computed properties 
let role ="admin";
let information = {
    name : "priyanka",
    age : 21,
    addresses : {
        city:"sonipat",
    },
    [role]: "priyanka",
}
































































