import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
    
    return (
        < div>
            <div class="wrapper">
                <form action="">
                   <h2 className='text-3xl mt-20'>Login</h2>
                   <div class= "input-box">
                       <span class="icon"><FaUser/></span>
                       <input type="text" placeholder="Username" required />
                   </div>
                    <div class= "input-box">
                       <span class="icon"><FaLock/></span>
                       <input type="password" placeholder="Password" required />
                       <div class= "forgot-pass">
                        <a href="#">Forgot Password?</a>
                     </div>
                        <button type="submit" className='button bg-zinc-900'>Login</button>
                      <div class="register-link">
                             <p className='text-white'>Don't have an account? 
                                <Link to="/Register" >Register </Link></p>
                        </div>

                   </div>
               </form>
             </div>

        </div>
        
    );
    
};

export default Login;