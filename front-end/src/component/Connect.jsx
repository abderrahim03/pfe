import React, { useState } from 'react'
import Parking from "../images/Parking.jpg"
import { Link } from 'react-router-dom'
import LandingPage from '../LandingPage'
import Login from '../login forms/Login'


const Connect = () => {
  const [login, setLogin] = useState(false)
  
  return (
    <div>
      <div className='flex bg-indigo-950 max-w-7xl pt-36 '>
        <div className='w-1/2'>
          <div className=' font-mono text-6xl text-slate-200  max-w-lg ml-24 mt-24 font-bold'>
            Rsetez toujours connecté
          </div><br />
          <div className=' ml-24 mt-14'>
            <a className=' bg-gradient-to-r from-purple-600 from-10%  to-pink-600 to 90% rounded-full px-8 py-3 font-bold' href='/login'>
              Se connecter
            </a>
          </div>
          <div className=' h-36'>

          </div>
        </div>
        <div className='w-1/2'>
          <img src={Parking} alt='Parking' className=' w-5/6 h-full ' />
        </div>
      </div>
    </div>
  )
} 

export default Connect
