import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ConsulterDepenses = () => {
    const [parkings, setParkings] = useState([])
    const [TarifParks, setTarifParks] = useState([])
    const [Stationnements, setStationnements] = useState([])
    const [du, setDu] = useState('')
    const [au, setAu] = useState('')
    const [isFiltering, setIsFiltering] = useState(false)

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
    const  getStationnements = async () => {
        await axios.get('http://127.0.0.1:8000/api/Stationnements').then((res, req) => {
            setStationnements(res.data.data); 
        })
    }

    useEffect(() => {
        getParkings()
        getTarifParks()
        getStationnements()
    }, [])

    const ConsulterDepenses = () => {
        setIsFiltering(true)
    }
    let S = 0
    return (
        <div>
            <h1>Consulter Depenses</h1>
            Du:
            <input type='date' value={du} onChange={e => setDu(e.target.value)} />
            Au:
            <input type='date' value={au} onChange={e => setAu(e.target.value)} />

            <button onClick={ConsulterDepenses}>Consulter Depenses</button>
            <table>
                <thead>
                    <tr>
                        <th>nom du parking</th>
                        <th>ville</th>
                        <th>prix</th>
                        <th>nombre unité</th>
                        <th>montant</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isFiltering ? Stationnements.map(stat => {
                            for (const park of parkings) {
                                for (const TarifPark of TarifParks) {
                                    if (stat.dateStat <= au && stat.dateStat >= du) {
                                        S = S + stat.nbrUnit * TarifPark.prix
                                        return (
                                            <tr>
                                                <td>{park.name}</td>
                                                <td>{park.city}</td>
                                                <td>{TarifPark.prix}</td>
                                                <td>{stat.nbrUnit}</td>
                                                <td>{stat.nbrUnit * TarifPark.prix}</td>
                                            </tr>
                                        )
                                    }
                                }
                            }
                        }) : Stationnements.map(stat => {
                            for (const park of parkings) {
                                for (const TarifPark of TarifParks) {
                                    S = S + stat.nbrUnit * TarifPark.prix
                                    return (
                                        <tr>
                                            <td>{park.name}</td>
                                            <td>{park.city}</td>
                                            <td>{TarifPark.prix}</td>
                                            <td>{stat.nbrUnit}</td>
                                            <td>{stat.nbrUnit * TarifPark.prix}</td>
                                        </tr>
                                    )
                                }
                            }
                        })
                    }
                    
                </tbody>
            </table><br />
            Total: {S} dh

        </div>
    );
};

export default ConsulterDepenses;