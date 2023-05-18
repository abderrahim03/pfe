import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Login = () => {
    
    return (
        < div className='body'>
            <div class="wrapper">
                <form action="">
                   <div className='ic'><span class="icon"><Link to={'/login'}><ImCross/></Link></span></div>
                   <h2 className='text-3xl mt-20'>Register</h2>
                   <div class= "input-box">
                       <span class="icon"><FaUser/></span>
                       <input type="text" placeholder="First Name" required />
                   </div>
                   <div class= "input-box">
                       <span class="icon"><FaUser/></span>
                       <input type="text" placeholder="Last Name" required />
                   </div>
                   <div class= "input-box">
                       <span class="icon"><MdEmail/></span>
                       <input type="email" placeholder="Email" required />
                   </div>
                    <div class= "input-box">
                       <span class="icon"><FaLock/></span>
                       <input type="password" placeholder="Password" required />
                        <button type="submit" className='button bg-zinc-900 mt-16'>Register</button>

                   </div>
               </form>
             </div>

        </div>
        
    );
    
};

export default Login;