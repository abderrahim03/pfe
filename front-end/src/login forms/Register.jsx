<<<<<<< HEAD
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

=======
import React, { useState } from 'react';
import img from '../images/Loginblur.jpg'
import axios from 'axios';
import Swal from 'sweetalert2'

const Register = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        city: '',
        phone: '',
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
        axios.post('http://127.0.0.1:8000/api/users', user).then(res => {
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


    const styles = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div>
            <div className='2xl:ml-80'>
                <div className='text-center w-11/12 ml-16 max-w-6xl' style={styles} >
                    <form className=' mx-52 pt-52  pb-28'>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">First name</label>
                                <input type="text" id="first_name" onChange={handleChanges} name='firstName' className="bg-transparent  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Last name</label>
                                <input type="text" id="last_name" onChange={handleChanges} name='lastName' className="bg-transparent  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                            </div>
                            <div>
                                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">City</label>
                                <input type="text" id="first_name" onChange={handleChanges} name='city' className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Phone number</label>
                                <input type="text" id="phone" onChange={handleChanges} name='phone' className="bg-transparent  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Email address</label>
                            <input type="email" id="email" onChange={handleChanges} name='email' className="bg-transparent  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                        </div> 
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Password</label>
                            <input type="password" id="password" onChange={handleChanges} name='password' className="bg-transparent  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                        </div> 
                        <div className="mb-6">
                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Confirm password</label>
                            <input type="password" id="confirm_password" onChange={handleChanges} name='cpassword' className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                        </div> 
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300">I agree with the <a href="#" className=" text-blue-700 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                        </div>
                         <button type="submit" onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
            
                </div>
            </div>
        
>>>>>>> d65d4f2 (Some Modification)
        </div>
        
    );
    
};

export default Login;