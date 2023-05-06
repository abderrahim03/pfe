import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AjoutStationnements = () => {
    const [stat, setStat] = useState({
        'dateStat' : '',
        'nbrUnit' : 0,
        'user' : '',
        'park' : '', 
        'TarifPark' : '',
    })
    const [parkings, setParkings] = useState([])
    const [TarifParks, setTarifParks] = useState([])


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
    }

    const handleChanges = (e) => {
        const name = e.target.name
        const value = e.target.value

        setStat({
            ...stat, // Spread the existing state object
            [name]: value, // Update the specific property with the new value
          })
    }
    return (
        <div>
            <h1>Ajout Stationnements</h1>

            <form method="post">
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User</label>
                    <input type="number" value={stat.user} className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' name='user' onChange={handleChanges} />
                <br />
                Nbr Unit:
                    <input type="number" value={stat.nbrUnit} name='nbrUnit' onChange={handleChanges} />
                <br />
                Date Station:
                    <input type="date" value={stat.dateStat} name='dateStat' onChange={handleChanges} />
                <br />

                Parking:

                <select value={stat.park} name='park' onChange={handleChanges}>
                    {
                        parkings.map((parking) => {
                            return (
                                <option key={parking.id} value={parking.id}>{parking.city}</option>
                            )
                        })
                    }
                </select><br />

                Tarif Park:

                <select value={stat.TarifPark} name='TarifPark' onChange={handleChanges}>

                {
                    TarifParks.map((TarifPark) => {
                        return (
                            <option key={TarifPark.id} value={TarifPark.id}>{TarifPark.park}</option>
                        )
                    })
                }

                </select><br /><br />

                <button type='button' onClick={handleSubmit}>Ajouter</button>
            </form>
            
        </div>
    );
};

export default AjoutStationnements;