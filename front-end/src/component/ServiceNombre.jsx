import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ServiceNombre = () => {
    const [parkings, setParkings] = useState([])
    const [Stationnements, setStationnements] = useState([])
    const [date, setDate] = useState('')
    const [au, setAu] = useState('')
    const [park, setPark] = useState('')
    const [nbrStat, setNbrStat] = useState(0)

    const  getParkings = async () => {
        await axios.get('http://127.0.0.1:8000/api/parkings').then((res, req) => {
            setParkings(res.data.data); 
        })
    }

    const  getStationnements = async () => {
        await axios.get('http://127.0.0.1:8000/api/Stationnements').then((res, req) => {
            setStationnements(res.data.data); 
        })
    }

    useEffect(() => {
        getParkings()
        getStationnements()
    }, [])

    const handelClick = () => {
        let id = 1
        let c = 0
        Stationnements.forEach(stat => {
            if (date == stat.dateStat && park == stat.park && stat.user == id) {
                c += 1
            }
        });
        setNbrStat(c)

    }
    return (
        <div>
            <h1>Calculer le nombre de Stationnements</h1>

            Parking:
            <select value={park} onChange={e => setPark(e.target.value)}>
                {
                    parkings.map((parking) => {
                        return (
                            <option key={parking.id} value={parking.id}>{parking.city}</option>
                        )
                    })
                }
            </select><br /><br />   

            Date:
                <input type='date' value={date} onChange={e => setDate(e.target.value)} />

            {/* Au:
                <input type='date' value={au} onChange={e => setAu(e.target.value)} />  */}

            <button onClick={handelClick}>Calculer</button><br /><br />

            Le nombre de stationnements effectuees est : {nbrStat} Stationements.

        </div>
    );
};

export default ServiceNombre;