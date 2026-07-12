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
















































