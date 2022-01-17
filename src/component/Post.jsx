import { useState } from "react";
import { Navigate } from "react-router-dom";
export const Post=()=>{
    const [data,setdata]=useState({company:"", title:"",salary:"",location:"",type:""});
    const change=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
    }
    const click=()=>{
       fetch("http://localhost:3004/jobs",{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"Application/json"}})
       .then(res=>res.json()).then(res=>console.log(res));
    }
    if(localStorage.getItem("user")===null){
        return <Navigate to="/login"></Navigate>
    }
    var role=JSON.parse(localStorage.getItem("user"));
    if(role.role!=="admin"){
        return <div>You are not Authorise to post jobs...!!!!</div>
    }
    else{
    return <>
    <input type="text" placeholder="Title" name="title" onChange={change}/><br/>
    <input type="text" placeholder="Company" name="company" onChange={change}/><br/>
    <input type="text" placeholder="Salary" name="salary"onChange={change}/><br/>
    <input type="text" placeholder="Location "name="location"onChange={change} /><br/>
    <input type="text" placeholder="Type " name="type"onChange={change}/><br/>
    <button onClick={click}>Post</button>
    </>

}
}