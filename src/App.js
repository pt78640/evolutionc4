import logo from './logo.svg';
import './App.css';

import {Navbar} from "./component/navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Login } from './component/Login';
import {Post} from './component/Post'
import {Dashboard} from './component/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/postjob" element={<Post/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  
  
</Routes>

      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
