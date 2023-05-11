import React, { useEffect, useState } from 'react';

import axios from 'axios';

const ChercherParking = () => {
    const [parkings, setParkings] = useState([])
    const [TarifParks, setTarifParks] = useState([])
    const [prix, setPrix] = useState('')
    const [parks, setParks] = useState([])
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
        <div>
            <h1 className='text-center text-5xl mt-4 text-sky-500'>Chercher Parking</h1>

<form>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative w-1/3">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Saisir le prix" required onChange={e => setPrix(e.target.value)}/>
        <button type="button" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={Searching}>Rechercher</button>
    </div>
</form>
            <ul className=' grid grid-cols-3'>
                {
                    isSearching ? parks.map((park) => { 
                        return (
                        <div  className=" mt-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <li className="mb-2 text-3xl font-bold tracking-tight text-emerald-500 dark:text-white" key={park.id}>{park.name}</li>
                            <button type="button" class="text-white mt-10  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" ><a href={`/show/${park.id}`}>Detail</a></button>
                        </div>    
                        )
                    }) : parkings.map((parking) => {
                        return (
                        <div  className="mt-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <li className=" mb-2 text-3xl font-bold tracking-tight text-emerald-400 dark:text-white" key={parking.id}><a href={`/show/${parking.id}`}>{parking.name}</a></li>
                        </div>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default ChercherParking;