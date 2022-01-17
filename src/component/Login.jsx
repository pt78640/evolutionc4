import {useState} from "react"




export const Login=()=>{
    
    const [data,setData]=useState({});
    const handelchange=(e)=>{
        let {name,value} = e.target;
        setData({...data,[name]:value});
    }

    
    
    const SubmitData=(e)=>{
        e.preventDefault();
       if(localStorage.getItem("user")===null){
           localStorage.setItem("user","")
       }
       localStorage.setItem("user",JSON.stringify(data));
       
    }

    return <div>
        <form action="" onSubmit={SubmitData}>
            <input type="text" placeholder="email" name="email" onChange={handelchange} />
            <input type="password" name="password" placeholder="Password" onChange={handelchange} />
            <input type="text" name="role" placeholder="role" onChange={handelchange} />
            <input type="submit"/>
        </form>
    </div>
}