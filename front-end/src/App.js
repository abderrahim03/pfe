import React from 'react'
import "./index.css"
import "./App.css"
import Parking from "./images/Parking.jpg"
function App() {
  return (
    <>
      <div className='flex bg-indigo-950 max-w-7xl pt-36 '>
        <div className='w-1/2'>
          <div className=' font-mono text-6xl text-slate-200  max-w-lg ml-24 mt-24 font-bold'>
            Rsetez toujours connecte
          </div><br />
          <div className=' ml-24 mt-14'>
            <button className=' bg-gradient-to-r from-purple-600 from-10%  to-pink-600 to 90% rounded-full px-8 py-3 font-bold'> Se connecter </button>
          </div>
          <div className=' h-36'>

          </div>
        </div>
        <div className='w-1/2'>
          <img src={Parking} alt='Parking' className=' w-5/6 h-full ' />
        </div>
      </div>

    </>
  );
}

export default App;
