import React, { useEffect, useState } from 'react';

import axios from 'axios';

const ChercherParking = () => {
    const [parkings, setParkings] = useState([])
    const [TarifParks, setTarifParks] = useState([])
    const [prix, setPrix] = useState('')
    const [parks, setParks] = useState([])
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

    const Searching = () => {
        setIsSearching(true)
        let Fdata = []
        for (let parking in parkings) {
            if (parkings[parking].nbrPlaceLibre > 0) {
                let F = TarifParks.filter(TarifPark => TarifPark.prix <= prix && TarifPark.park == parkings[parking].id)
                Fdata.push(F)
            }
        }
        let Parks = []
        for (const FiletrdData of Fdata) {
            for (const data of FiletrdData) {
                for (const parking of parkings) {
                    if (parking.id == data.id) {
                        Parks.push(parking)
                    }
                }
            }
        }
        setParks(Parks)
    }

    return (
        <div>
            <h1>Chercher Parking</h1>
            <input type='text' placeholder='Saisir le prix' onChange={e => setPrix(e.target.value)}/>
            <button type='button' onClick={Searching} className='mx-3 btn btn-primary'>Chercher</button>

            <ul>
                {
                    isSearching ? parks.map((park) => { 
                        return (
                            <li key={park.id}><a href={`/show/${park.id}`}>{park.city}</a></li>
                        )
                    }) : parkings.map((parking) => {
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