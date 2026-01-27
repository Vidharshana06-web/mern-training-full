function double(num){
    return num*2;
}
let arr=[2,4,5,6,7];
let doubleArr=arr.map(double);
console.log(doubleArr);
const triple=arr.map((n)=>n*3);
console.log(triple);


//filter
function isOdd(num)
{
    return num%2!=0;
}
let oddnumbers=arr.filter(isOdd);
console.log(oddnumbers);

//task
let array=[13,15,20,35,27];
let resultantarr=array.filter((n)=>(n%5==0));
console.log(resultantarr);

//sum
let array1=[1,2,3,4,5];
let sum=array1.reduce((product,current)=>{
    return product*current;
},1)
console.log(sum);

//task2
let array3=[2,3,4,5,6,7];
let triplearr=array3.map((n)=>(n*3));
console.log(triplearr);
let evennum=triplearr.filter((n)=>(n%2==0));
console.log(evennum);
let sumarr=evennum.reduce((pro,current)=>{
    return pro+current;
},0)
console.log(sumarr);

//
let b=[1,2,3,4,5];
const [one,...two]=b;
let num=[0,...b,6,7]
const obj1={x:3,y:5};
const obj2={y:6,z:7};
const spread={...obj1,...obj2};
console.log(spread);



const promise=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        const success=true;
        if(success){
            resolve("Resolved successfully");
        }
        else{
            reject("rejected");
        }
    },2000)

    
})
console.log("before promise execution");
promise.then((result)=>console.log(result))
       .catch(err=>console.log(err))
       .finally(()=>(console.log("Promise completed")))

console.log("After promise execution");


fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {return response.json()})
      .then((data)=> data.map((user)=>{console.log(user.name)}))
      .catch((err)=>console.log(err))



let name='vidhu';
let age=19;
console.log(` I am ${name} and my age is ${age}`);