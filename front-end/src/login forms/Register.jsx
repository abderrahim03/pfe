import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {
        const [user, setUser] = useState({
            firstName: '',
            lastName: '',
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
            axios.post('http://127.0.0.1:8000/api/register', user).then(res => {
                if (res.data.status) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: res.data.message,
                    })
                }   
            })
        }
    
    return (
        < div className='body'>
            <div class="wrapper">
                <form action="">
                   <div className='ic'><span class="icon"><Link to={'/login'}><ImCross/></Link></span></div>
                   <h2 className='text-3xl mt-20'>Register</h2>
                   <div class= "input-box">
                       <span class="icon"><FaUser/></span>
                       <input type="text" onChange={handleChanges} name='firstName' placeholder="First Name" required />
                   </div>
                   <div class= "input-box">
                       <span class="icon"><FaUser/></span>
                       <input type="text" onChange={handleChanges} name='lastName' placeholder="Last Name" required />
                   </div>
                   <div class= "input-box">
                       <span class="icon"><MdEmail/></span>
                       <input type="email" onChange={handleChanges} name='email' placeholder="Email" required />
                   </div>
                   <div class= "input-box">
                       <span class="icon"><FaLock/></span>
                       <input type="password" onChange={handleChanges} name='password' placeholder="Password" required />
                   </div>
                    <div class= "input-box">
                        <span class="icon"><FaLock/></span>
                        <input type="password" onChange={handleChanges} name='cpassword' placeholder="Confirm Password" required />
                        <button type="button" onClick={handleClick} className='button bg-zinc-900 mt-16'>Register</button>
                   </div>
               </form>
             </div>

        </div>
        
    );
    
};

export default Register;