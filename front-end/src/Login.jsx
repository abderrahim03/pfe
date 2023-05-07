import React from 'react';
import img from './images/login.jpg'

const Login = () => {
    const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
    return (
        <div className='text-center mt-24 text-white' style={styles}>
            <h1>Ceci est login </h1>
            
        </div>
    );
};

export default Login;