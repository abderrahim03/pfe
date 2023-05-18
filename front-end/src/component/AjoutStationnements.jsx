import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
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
        axios.post('http://127.0.0.1:8000/api/Stationnements', stat).then((res, req) => {
            Swal.fire({ 
                position: 'top-center',
                icon: 'success',
                title: res.data.success,
                showConfirmButton: false,
                timer: 2500
            })
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.data.error,
              })
        })
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
    // backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
    return (  
         <div>
            <h1 className=' text-center text-5xl mt-4 text-sky-500' >Ajout Stationnements</h1><br/>
            <form method="post" className='mt-24  rounded-xl p-11' style={styles}>
                <div >
                    <div className='flex input-box2'>
                    <div  class="flex-shrink-0  inline-flex  py-2.5 px-4 text-sm font-medium text-center text-white  w-40  ">
                    USER
                    </div>
                    <input type="text" value={stat.user} className=' ml-10 text-sm rounded-lg block w-1/2 p-2.5' name='user' onChange={handleChanges} />
                </div><br/>
                <div className='flex input-box2'>        
                    <div  class="flex-shrink-0  inline-flex  py-2.5 px-4 text-sm font-medium text-center text-white  w-40  ">
                    NBR UNITE
                    </div>
                    <input type="text" value={stat.nbrUnit} name='nbrUnit' onChange={handleChanges} className=' ml-10 bg-green-50 border  border-emerald-400 dark:text-emerald-600 text-sm rounded-lg block w-1/2 p-2.5 dark:bg-gray-700 dark:border-green-500'/>

                </div><br/>
                
                <div className='flex input-box2'>
                    <div  class="flex-shrink-0  inline-flex  py-2.5 px-4 text-sm font-medium text-center text-white  w-40  ">
                        DATE STATION
                    </div>
                    <input type="date" value={stat.dateStat} name='dateStat' className=' ml-10 bg-green-50 border  border-emerald-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={handleChanges} />
                </div><br/>
                    
                <div className='flex input-box2'>
                    <div  class="flex-shrink-0  inline-flex  py-2.5 px-4 text-sm font-medium text-center text-white  w-40  ">
                        PARKING
                    </div>
                        <select value={stat.park} name='park' onChange={handleChanges} className=' ml-10   text-sm rounded-lg '>
                            {
                                parkings.map((parking) => {
                                    return (
                                        <option key={parking.id} value={parking.id}>{parking.name}</option>
                                    )
                                })
                            }
                        </select>
                </div><br/>
                <div className='flex input-box2'>
                    <div  class="flex-shrink-0  inline-flex  py-2.5 px-4 text-sm font-medium text-center text-white  w-40  ">
                        TARIF PARKING 
                    </div>
                    <div  className='ml-10 text-sm rounded-lg input'>
                        {
                            TarifParks.map((TarifPark) => {
                                if (TarifPark.id == stat.park) { 
                                    return (
                                        <div className='flex'>
                                            <p>{TarifPark.prix}</p>
                                            <input type={'radio'} value={TarifPark.id} name='TarifPark' onChange={handleChanges} className='radio' />
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <br /><br />
                <div className='text-center'>
                    <button type='button' onClick={handleSubmit} className=' bg-gradient-to-r from-sky-200   to-sky-600  rounded-full px-8 py-3 font-bold '>Ajouter</button>
                </div>
                </div>
                
            </form>

            
        </div>
    );
};

export default AjoutStationnements;