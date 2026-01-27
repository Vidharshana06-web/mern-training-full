const fetchApi1=async()=>{
    try{
        const res=await fetch('http://localhost:4000/task/readTask');
        const data=await res.json()
        {data.map((n)=>{console.log(n)})}
    }
    catch(error){
        console.log(error);

    }
}
fetchApi1();
















