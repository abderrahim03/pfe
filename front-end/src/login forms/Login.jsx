import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: '',
        cpassword: '',
    })

    const handleChanges = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({
            ...user,
            [name]: value
        })
    }
    const handleClick = () => { 
        axios.post('http://127.0.0.1:8000/api/login', user).then(res => {
            if (res.data.status) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.userId)
                localStorage.setItem('isLogin', res.data.isLogin)
                localStorage.setItem('isAdmin', res.data.isAdmin)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }else {
                localStorage.setItem('isLogin', 'false')
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.data.message,
                })
            }
            navigate('/account')
        })
    }
    
    return (
        < div>
            <div class="wrapper mt-60">
                <form action="">
                   <h2 className='text-3xl mt-20'>Login</h2>
                   <div class= "input-box">
                       <span class="icon"><FaUser/></span>
                       <input type="email" onChange={handleChanges} name='email' placeholder="email" required />
                   </div>
                   <div class= "input-box">
                       <span class="icon"><FaLock/></span>
                       <input type="password" onChange={handleChanges} name='password' placeholder="password" required />
                   </div>
                    <div class= "input-box">
                       <span class="icon"><FaLock/></span>
                       <input type="password" onChange={handleChanges} name='cpassword' placeholder="Confirm Password" required />
                       <div class= "forgot-pass">
                        <a href="#">Forgot Password?</a>
                     </div>
                        <button type="button" className='button bg-zinc-900' onClick={handleClick}>Login</button>
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