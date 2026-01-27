
let a=6;//here it passes only the data alone not a refernce
let b=a;
a=4;
console.log(b);


let  object1={age:33};//non primitive data type(here it passes the refernce of that value)
let object2=object1;
object1.age=22;
console.log(object2.age);


let c=true;
let d=false;
if(c||d){
   console.log("its true");
}

console.log(9&5);
console.log(9|5);
console.log(9^5);


function sub(a,b,c){
    return a-b-c;
}
console.log(sub(10,10,5));


//arrow function
const sum=(a,b)=>{
    return a+b;
}
console.log(sum(2,3));