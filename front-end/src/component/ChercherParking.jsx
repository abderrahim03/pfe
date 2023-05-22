import React, { useEffect, useState } from 'react';

import axios from 'axios';

const ChercherParking = () => {
    const [parkings, setParkings] = useState([])
    const [TarifParks, setTarifParks] = useState([])
    const [prix, setPrix] = useState('')
    const [parks, setParks] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    //get token from localStorage
    const token = localStorage.getItem('token')

    const  getParkings = async () => {
        await axios.get('http://127.0.0.1:8000/api/parkings', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then((res, req) => {
            setParkings(res.data.data); 
        })
    }
    const  getTarifParks = async () => {
        await axios.get('http://127.0.0.1:8000/api/tarif-parkings', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then((res, req) => {
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
        console.log(Fdata);
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
        <div >
            <h1 className='text-center text-5xl mt-4 text-sky-500'>Chercher Parking</h1>
            <div className='bg mt-24 rounded-xl p-11 for'>
                 <form >   
                <div class= "input-box1">
                       <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-6 h-6  text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                       <input type="text" placeholder="Saisir le prix"   required onChange={e => setPrix(e.target.value)}/>
                       <button type="button" class="text-white absolute right-4 bottom-1.5 border border-gray-100 hover:shadow-teal-300 hover:shadow-md hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 " onClick={Searching}>Rechercher</button>
                   </div>
            </form>
            <ul className=' grid grid-cols-3'>
                {
                    isSearching ? parks.map((park) => { 
                        return (
                            <div  className=" mt-10 mx-4 max-w-sm p-6 border border-gray-200 rounded-lg shadow  hover:shadow-teal-300 hover:shadow-xl ">
                                <li className="mb-2 text-3xl font-bold tracking-tight text-white " key={park.id}><a href={`/show/${park.id}`}>{park.name}</a></li>
                            </div>    
                        )
                    }) : parkings.map((parking) => {
                        return (
                            <div  className="mt-10 mx-4 max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:shadow-teal-300 hover:shadow-xl ">
                                <li className=" mb-2 text-3xl font-bold tracking-tight text-white dark:text-white" key={parking.id}><a href={`/show/${parking.id}`}>{parking.name}</a></li>
                            </div>
                        )
                    })
                }
            </ul>
            </div>
           
        </div>
    );
};

export default ChercherParking;