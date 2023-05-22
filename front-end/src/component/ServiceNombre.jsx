import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ServiceNombre = () => {
    const [parkings, setParkings] = useState([])
    const [Stationnements, setStationnements] = useState([])
    const [date, setDate] = useState('')
    const [au, setAu] = useState('')
    const [park, setPark] = useState('')
    const [nbrStat, setNbrStat] = useState(0)
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    const  getParkings = async () => {
        await axios.get('http://127.0.0.1:8000/api/parkings', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then((res, req) => {
            setParkings(res.data.data); 
        })
    }

    const  getStationnements = async () => {
        await axios.get('http://127.0.0.1:8000/api/Stationnements', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then((res, req) => {
            setStationnements(res.data.data); 
        })
    }

    useEffect(() => {
        getParkings()
        getStationnements()
    }, [])

    const handelClick = () => {
        let c = 0
        Stationnements.forEach(stat => {
            if (date == stat.dateStat && park == stat.park && stat.user == userId) {
                c += 1
            }
        });
        setNbrStat(c)

    }
    return (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h1 className='text-center text-5xl mt-4 text-sky-500'>Calculer le nombre de Stationnements</h1>
            <div className='mt-24 rounded-xl p-11 for'>
                <div className=' flex '>
    <div  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
        PARKING
    </div>
=======
            <h1 className='text-center text-5xl mt-4 text-sky-500 h-56'>Calculer le nombre de Stationnements</h1>
            <div className=' flex mt-24'>
                <div  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                    PARKING
                </div>
>>>>>>> 1aaf982 (modify)
=======
            <h1 className='text-center text-5xl mt-4 text-sky-500'>Calculer le nombre de Stationnements</h1>

            <div className=' flex mt-24'>
    <div  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
        PARKING
    </div>
>>>>>>> af0e920 (m)
                <select value={park} name='park'  onChange={e => setPark(e.target.value)} className='  ml-10  bg-green-50 border  border-emerald-400 text-gray-900 text-sm rounded-lg  dark:border-l-gray-700  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
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
        DATE  
    </div>
                    <input type="date" value={date} name='dateStat' className=' ml-10 bg-green-50 border  border-emerald-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={e => setDate(e.target.value)} />
                </div><br/>

<<<<<<< HEAD
<<<<<<< HEAD
            {/* Au:
                <input type='date' value={au} onChange={e => setAu(e.target.value)} />  */}

            <div className='text-center'> <button onClick={handelClick} className='  bg-gradient-to-r from-sky-200   to-sky-600  rounded-full px-8 py-3 font-bold'>Calculer</button></div><br /><br />
=======
=======
            {/* Au:
                <input type='date' value={au} onChange={e => setAu(e.target.value)} />  */}

>>>>>>> af0e920 (m)
            <div className='text-center'> <button onClick={handelClick} className=' bg-gradient-to-r from-cyan-200   to-emerald-400  rounded-full px-8 py-3 font-bold '>Calculer</button></div><br /><br />
>>>>>>> 1aaf982 (modify)

<div  className='mt-10 text-center text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-900'>
                Le nombre de stationnements effectués est : {nbrStat} Stationnements.

<<<<<<< HEAD
<<<<<<< HEAD
</div>
            </div>

            
=======
            </div>
>>>>>>> 1aaf982 (modify)
=======
</div>
>>>>>>> af0e920 (m)
        </div>
    );
};

export default ServiceNombre;