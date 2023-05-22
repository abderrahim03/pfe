import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './ConsulterDepenses.css'
import { FaFileExport, FaDropbox } from "react-icons/fa";


const ConsulterDepenses = () => {
    const [parkings, setParkings] = useState([])
    const [TarifParks, setTarifParks] = useState([])
    const [Stationnements, setStationnements] = useState([])
    const [du, setDu] = useState('')
    const [au, setAu] = useState('')
    const user = localStorage.getItem('userId')
    const [isFiltering, setIsFiltering] = useState(false)
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
<<<<<<< HEAD
            <div className='mt-16 rounded-xl p-11 for'>
                <div className='flex input-box2 '>
                    <div  class="flex-shrink-0  inline-flex  py-2.5 px-4 text-sm font-medium text-center text-white  w-40 ">
                Du:
            </div>
            <input type='date' value={du} onChange={e => setDu(e.target.value)} className=' ml-10 text-sm rounded-lg block w-1/2 p-2.5' /></div><br/>
            <div className= 'flex input-box2'>
                    <div  class="flex-shrink-0  inline-flex  py-2.5 px-4 text-sm font-medium text-center text-white  w-40">
                Au:
            </div>  
            <input type='date' value={au} onChange={e => setAu(e.target.value)} className='ml-10 text-sm rounded-lg block w-1/2 p-2.5' /></div><br/>
            <div className=' text-center'><button onClick={ConsulterDepenses} className=' bg-gradient-to-r from-sky-200   to-sky-600  rounded-full px-8 py-3 font-bold '>Consulter Depenses</button><br/><br/><br/></div>
             <div className=' text-center'>
                <table className='border-collapse border border-slate-500  text-center bg-gradient-to-r from-sky-200   to-sky-600 '>
=======
            <div className=' flex mt-24'>
                    <div  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                Du:
            </div>
            <input type='date' value={du} onChange={e => setDu(e.target.value)} className=' ml-10 bg-green-50 border  border-emerald-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' /></div><br/>
            <div className=' flex'>
                    <div  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-600 bg-cyan-100 border border-gray-300 rounded-lg w-40 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                Au:
            </div>  
            <input type='date' value={au} onChange={e => setAu(e.target.value)} className=' ml-10 bg-green-50 border  border-emerald-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' /></div><br/>
            <button onClick={ConsulterDepenses} className=' bg-gradient-to-r from-cyan-200   to-emerald-400  rounded-full px-8 py-3 font-bold '>Consulter Depenses</button><br/><br/><br/>
<<<<<<< HEAD
            <div className=' text-center'>
                <table className='table table-striped table-hover table-borderless'>
>>>>>>> 1aaf982 (modify)
=======
            <div>
                <table className='table table-striped table-hover table-borderless table-dark'>
>>>>>>> af0e920 (m)
                    <thead>
                        <tr>
                            <th >Nom du parking</th>
                            <th>Ville</th>
                            <th>Place</th>
                            <th>Prix</th>
                            <th>Nombre unité</th>
                            <th>Montant</th>
                            <th>Annuler</th>
                            <th>Imprimer</th>
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
                                                    <tr key={stat.id}>
                                                        <td>{park.name}</td>
                                                        <td>{park.city}</td>
                                                        <td>{stat.place}</td>
                                                        <td>{TarifPark.prix}</td>
                                                        <td>{stat.nbrUnit}</td>
                                                        <td>{stat.nbrUnit * TarifPark.prix}</td>
                                                        <td>
                                                            <button type='button' onClick={() => {
                                                                console.log(stat.id);
                                                                axios.delete(`http://127.0.0.1:8000/api/Stationnements/${stat.id}`, {
                                                                    headers: {
                                                                        'Authorization': `Bearer ${token}`,
                                                                    },
                                                                }).then((res) => {
                                                                    if (res.data.deleted) {
                                                                        Swal.fire({ 
                                                                            position: 'top-center',
                                                                            icon: 'success',
                                                                            title: res.data.message,
                                                                            showConfirmButton: false,
                                                                            timer: 2500
                                                                        })
                                                                        
                                                                    }
                                                                })
                                                                }} className='btn btn-info'>
                                                                <FaDropbox className='ml-5 text-blue-600'/>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button type='button' className='btn btn-warning' onClick={() => {
                                                                try {
                                                                    axios.post('http://127.0.0.1:8000/api/create-pdf', {
                                                                        id: stat.id // Replace with the desired ID value
                                                                    }).then(response => {

                                                                        const { pdf } = response.data;
    
                                                                        // Create a temporary link element
                                                                        const link = document.createElement('a');
                                                                        link.href = `data:application/pdf;base64,${pdf}`;
                                                                        link.setAttribute('download', 'document.pdf');
                                                                        link.style.display = 'none';
                                                                        document.body.appendChild(link);
                                                                      
                                                                        // Trigger the download
                                                                        link.click();
                                                                      
                                                                        // Clean up the link element
                                                                        document.body.removeChild(link);
                                                                    })
                                                                  } catch (error) {
                                                                    console.log(error);
                                                                  }
                                                            }}>
                                                                <FaFileExport className='ml-5 text-blue-600'/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        }
                                    }
                                }
                            }) : Stationnements.map(stat => {
                                for (const park of parkings) {
                                    if (park.id == stat.park) {
                                        for (const TarifPark of TarifParks) {
                                            if (TarifPark.id == stat.TarifPark && stat.user == user) {
                                                S = S + stat.nbrUnit * TarifPark.prix
                                                return (
                                                    <tr key={stat.id}>
                                                        <td>{park.name}</td>
                                                        <td>{park.city}</td>
                                                        <td>{stat.place}</td>
                                                        <td>{TarifPark.prix}</td>
                                                        <td>{stat.nbrUnit}</td>
                                                        <td>{stat.nbrUnit * TarifPark.prix}</td>
                                                        <td>
                                                            <button type='button' onClick={() => {
                                                                console.log(stat);
                                                                axios.delete(`http://127.0.0.1:8000/api/Stationnements/${stat.id}`, {
                                                                    headers: {
                                                                        'Authorization': `Bearer ${token}`,
                                                                    },
                                                                }).then((res) => {
                                                                    if (res.data.deleted) {
                                                                        Swal.fire({ 
                                                                            position: 'top-center',
                                                                            icon: 'success',
                                                                            title: res.data.message,
                                                                            showConfirmButton: false,
                                                                            timer: 2500
                                                                        }) 
                                                                    }
                                                                })
                                                                }}>
                                                                <FaDropbox className='ml-5 text-blue-600'/>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button type='button' className='btn btn-warning' onClick={() => {
                                                                
                                                                try {
                                                                    axios.post('http://127.0.0.1:8000/api/create-pdf', {
                                                                        id: stat.id,
                                                                        name: park.name,
                                                                        city: park.city,
                                                                        place: stat.place,
                                                                        prix: TarifPark.prix,
                                                                        nbrUnit: stat.nbrUnit,
                                                                        Montant: stat.nbrUnit * TarifPark.prix
                                                                    }).then(response => {

                                                                        const { pdf } = response.data;
    
                                                                        // Create a temporary link element
                                                                        const link = document.createElement('a');
                                                                        link.href = `data:application/pdf;base64,${pdf}`;
                                                                        link.setAttribute('download', 'document.pdf');
                                                                        link.style.display = 'none';
                                                                        document.body.appendChild(link);
                                                                      
                                                                        // Trigger the download
                                                                        link.click();
                                                                      
                                                                        // Clean up the link element
                                                                        document.body.removeChild(link);
                                                                    })
                                                                } catch (error) {
                                                                console.log(error);
                                                                }      
                                                            }}>
                                                                <FaFileExport className='ml-5 text-yellow-700'/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        }
                                    }
                                }
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
            <div className='mt-10 text-center text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-900'>
                Total: {S} dh
<<<<<<< HEAD
            </div>   
            </div>
            
           
=======
            </div>
>>>>>>> 1aaf982 (modify)
        </div>
    );
};

export default ConsulterDepenses;