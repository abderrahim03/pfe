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
            <h1 className='text-center text-5xl mt-4 text-sky-500'>Consulter Depenses</h1>
            <div className=' flex mt-24'>
                    <div  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
        Du:
    </div>
            <input type='date' value={du} onChange={e => setDu(e.target.value)} className=' ml-10 bg-green-50 border  border-emerald-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' /></div><br/>
            <div className=' flex'>
                    <div  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
        Au:
    </div>  
            <input type='date' value={au} onChange={e => setAu(e.target.value)} className=' ml-10 bg-green-50 border  border-emerald-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' /></div><br/>
            <button onClick={ConsulterDepenses} className=' bg-gradient-to-r from-cyan-200   to-emerald-400  rounded-full px-8 py-3 font-bold '>Consulter Depenses</button><br/><br/><br/>
            <div className=' text-center ml-80'>
                <table className='border-collapse border border-slate-500  text-center bg-gradient-to-r from-cyan-200   to-emerald-400'>
                <thead>
                    <tr className=' text-xl text-blue-950' >
                        <th  className='border border-slate-600 p-4'>Nom du parking</th>
                        <th className='border border-slate-600  p-4'>Ville</th>
                        <th className='border border-slate-600 p-4'>Prix</th>
                        <th className='border border-slate-600 p-4'>Nombre unité</th>
                        <th className='border border-slate-600 p-4 '>Montant</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isFiltering ? Stationnements.map(stat => {
                            for (const park of parkings) {
                                if (park.id == stat.park) {
                                    for (const TarifPark of TarifParks) {
                                        if (TarifPark.id == stat.TarifPark && stat.dateStat <= au && stat.dateStat >= du) {
                                            S = S + stat.nbrUnit * TarifPark.prix
                                            return (
                                                <tr >
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
                            }
                        }) : Stationnements.map(stat => {
                            for (const park of parkings) {
                                for (const TarifPark of TarifParks) {
                                    S = S + stat.nbrUnit * TarifPark.prix
                                    return (
                                        <tr className=''>
                                            <td className='border border-slate-700  text-stone-800 text-blue-950 ' >{park.name}</td>
                                            <td className='border border-slate-700  text-stone-800 text-blue-950' >{park.city}</td>
                                            <td className='border border-slate-700  text-stone-800 text-blue-950' >{TarifPark.prix}</td>
                                            <td className='border border-slate-700  text-stone-800 text-blue-950' >{stat.nbrUnit}</td>
                                            <td className='border border-slate-700  text-stone-800 text-blue-950' >{stat.nbrUnit * TarifPark.prix}</td>
                                        </tr>
                                    )
                                }
                            }
                        })
                    }
                    
                </tbody>
            </table>
            </div>
            <div className='mt-10 text-center text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-900'>
                Total: {S} dh
            </div>   
        </div>
    );
};

export default ConsulterDepenses;