import { useEffect,useState } from "react";
import { Navigate } from "react-router-dom";

export const Dashboard=()=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch(" http://localhost:3004/jobs").then(res=>res.json()).then(res=>setdata(res));
    },[])
    if(localStorage.getItem("user")===null){
        return <Navigate to="/login"></Navigate>
    }
    const sortdata=()=>{
        fetch(" http://localhost:3004/jobs?_sort=salary").then(res=>res.json()).then(res=>setdata(res));
    }
    return <>
    <button onClick={sortdata}>Sort</button>
    {data.map(el=>{
        return <div key={el.id} style={{display:"grid",gridTemplateColumns: "20% 20% 20% 20%", gap:"1%"}}>
            <h2>{el.company}</h2>
            <h2>{el.title}</h2>
            <h2>{el.salary}</h2>
            <h2>{el.location}</h2>
            <h2>{el.type}</h2>
        </div>
    })}
    </>
}