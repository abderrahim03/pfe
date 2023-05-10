import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img from '../images/imgblur.jpg'
import { button } from '@material-tailwind/react';
const AjoutStationnements = () => {
    const [parkings, setParkings] = useState([])
    const [TarifParks, setTarifParks] = useState([])
    const [stat, setStat] = useState({
        'dateStat' : '',
        'nbrUnit' : 0,
        'user' : '',
        'park' : '', 
        'TarifPark' : '',
    })
    const [id, setId] = useState('')
    const  getParkings = async () => {
        await axios.get('http://127.0.0.1:8000/api/parkings').then((res, req) => {
            setParkings(res.data.data); 
        })
    }
    const  getTarifParks = async () => {
        await axios.get('http://127.0.0.1:8000/api/tarif-parkings').then((res, req) => {
            setTarifParks(res.data.data); 
        })
    }

    useEffect(() => {
        getParkings()
        getTarifParks()
    }, [])
    const handleSubmit = () => {
        axios.post('http://127.0.0.1:8000/api/Stationnements', stat)
        alert('Stationnemet added successfully')
        
        console.log(stat);
    }

    const handleChanges = (e) => {
        const name = e.target.name
        const value = e.target.value
        
        setStat({
            ...stat, // Spread the existing state object
            [name]: value, // Update the specific property with the new value
        })
        
    }
    const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
    return (
        
        <div>
            <h1 className=' text-center text-5xl mt-4 text-sky-500' >Ajout Stationnements</h1><br/>
            <form method="post" className=' bg-fixed ml-32 mt-10 p-32  pl-64 text-center mr-32 max-xl:pl-32 z-0' style={styles}>
                <div >
                    <div className='flex'>
                    <div  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
        USER
    </div>
                                        <input type="number" value={stat.user} className=' ml-10 bg-green-50 border  border-emerald-400 dark:text-emerald-600 text-sm rounded-lg block w-1/2 p-2.5 dark:bg-gray-700 dark:border-green-500' name='user' onChange={handleChanges} />
                </div><br/>
                <div className='flex'>
                                    
                    <div  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
       NBR UNITE
    </div>
                        <input type="number" value={stat.nbrUnit} name='nbrUnit' onChange={handleChanges} className=' ml-10 bg-green-50 border  border-emerald-400 dark:text-emerald-600 text-sm rounded-lg block w-1/2 p-2.5 dark:bg-gray-700 dark:border-green-500'/>

                </div><br/>
                
                <div className=' flex'>
                    <div  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
        DATE STATION
    </div>
                    <input type="date" value={stat.dateStat} name='dateStat' className=' ml-10 bg-green-50 border  border-emerald-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={handleChanges} />
                </div><br/>
                    
<div className=' flex'>
    <div  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
        PARKING
    </div>
                <select value={stat.park} name='park' onChange={handleChanges} className='  ml-10  bg-green-50 border  border-emerald-400 text-gray-900 text-sm rounded-lg  dark:border-l-gray-700  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    {
                        parkings.map((parking) => {
                            return (
                                <option key={parking.id} value={parking.id}>{parking.name}</option>
                            )
                        })
                    }
                </select>
</div><br/>
<div className=' flex'>
    <div  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
        TARIF PARKING 
    </div>
                <div value={stat.TarifPark} className='  ml-10  bg-green-50 border  border-emerald-400 text-gray-900 text-sm rounded-lg  dark:border-l-gray-700  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    {
                        TarifParks.map((TarifPark) => {
                            if (TarifPark.id == stat.park) { 
                                return (
                                    <div>
                                    <p>{TarifPark.prix}</p>
                                         <input type={'radio'} value={TarifPark.id} name='TarifPark' onChange={handleChanges}/>
                                    </div>
                                    
                                )
                            }
                        })
                    }
                </div>
</div>
                <br /><br />
                <div className='text-center'>
                    <button type='button' onClick={handleSubmit} className=' bg-gradient-to-r from-cyan-200   to-emerald-400  rounded-full px-8 py-3 font-bold '>Ajouter</button>
                </div>
                </div>
                
            </form>

            
        </div>
    );
};

export default AjoutStationnements;