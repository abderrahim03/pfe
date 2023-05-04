import React, { useEffect, useState } from 'react';

import axios from 'axios';

const ChercherParking = () => {
    const [parkings, setParkings] = useState([])
    const [TarifParks, setTarifParks] = useState([])
    const [prix, setPrix] = useState('')
    const [Fparkings, setFParkings] = useState([])
    const [isSearching, setIsSearching] = useState(false)
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

    const getprix = () => {
        let Fdata = TarifParks.filter(TarifPark => TarifPark.prix <= prix)
        console.log(Fdata);
    }

    return (
        <div>
            <h1>Chercher Parking</h1>
            <input type='text' placeholder='Saisir le prix' onChange={e => setPrix(e.target.value)}/> <button type='button' onClick={getprix}>Chercher</button>

            <ul>
                {
                    isSearching ? 'searching' : parkings.map((parking) => {
                        return (
                            <li key={parking.id}><a href={`/show/${parking.id}`}>{parking.city}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default ChercherParking;