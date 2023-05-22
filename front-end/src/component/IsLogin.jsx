import React from 'react'
import Connect from './Connect';
import Home from './Home';

const IsLogin = () => {
    const isLogin = localStorage.getItem('isLogin')
  return (
    <>
        {
          isLogin == true ? <Home /> : <Connect />
        }
        
    </>
  )
}

export default IsLogin
