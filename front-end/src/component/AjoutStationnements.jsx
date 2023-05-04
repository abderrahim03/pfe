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
                User:
                    <input type="number" value={stat.user} name='user' onChange={handleChanges} />
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