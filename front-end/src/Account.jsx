import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Account = () => {
    const userId = localStorage.getItem('userId')
    const navigate = useNavigate()
    const isAdmin = localStorage.getItem('isAdmin')
    const isLogin = localStorage.getItem('isLogin')
    const token = localStorage.getItem('token')
    const [user, setUser] = useState({})

    const getUser = () => {
        axios.get(`http://127.0.0.1:8000/api/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then(res => {
            setUser(res.data)
        })
    }
    useEffect(() => {
        getUser()
        console.log(isLogin);
    }, [user])

    const handelClick = () => {
        // Remove the token
        localStorage.removeItem('token');
        // Remove the user
        localStorage.removeItem('userId');

        localStorage.setItem('isLogin', 'false')
        navigate('/home')
    }
  return (
    <div>
        {
            isLogin == 'true' ? (
                <div>
                    Hello {isAdmin == 1 ? 'Admin' : 'user'}
                    <div>
                        firstName : {user.firstName} <br />
                        lastName : {user.lastName} <br />
                        Email : {user.email} 
                    </div> <br />
                    <button type='button' onClick={handelClick} className='bg-gradient-to-r from-sky-200 to-sky-600 rounded-full px-8 py-3 font-bold'>
                        LogOut
                    </button>
                </div>
            ) : <Link
                    to='/login'
                >
                Login
                </Link>   
        } 
    </div>
  )
}

export default Account
