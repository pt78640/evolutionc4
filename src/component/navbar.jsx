import {Link} from 'react-router-dom';
export const Navbar=()=>{
    return <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <Link to="/dashboard"><h1>Dashboard</h1></Link>
        <Link to="/postjob"><h1>Post Job</h1></Link>
        <Link to="/login"><h1>Login</h1></Link>
    </div>
}