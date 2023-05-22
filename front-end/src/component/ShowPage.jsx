import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShowPage = () => {
    const {id} = useParams()
    const [parkings, setParkings] = useState([])
    const [TarifParks, setTarifParks] = useState([])
    const [TypeTarifs, setTypeTarifs] = useState([])
    const [TypeTarif, setTypeTarif] = useState({})
    const [TarifPark, setTarifPark] = useState({})
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
    const  getTypeTarifs = async () => {
      await axios.get('http://127.0.0.1:8000/api/type-tarifs', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
    }).then((res, req) => {
        setTypeTarifs(res.data.data);
      })
    }
    const getTarifPark = () => {
      TarifParks.forEach(TarifPark => {
        if (TarifPark.park == id) {
          setTarifPark(TarifPark)
          for (const Type of TypeTarifs) {
            if (TarifPark.type == Type.id) {   
              setTypeTarif(Type)
            }
          }
        }
      });
    }

    useEffect(() => {
      getParkings()
      getTarifParks() 
      getTypeTarifs() 
  }, [])

  useEffect(() => {
    getTarifPark()
  })


  return (
    <div>
      {
        parkings.map((parking) => {
          if (parking.id == id) {
            return ( 
<<<<<<< HEAD
<<<<<<< HEAD
                <div key={parking.id} className="box mt-60">
=======
<<<<<<< HEAD
                <div key={parking.id} className="box">
>>>>>>> 1aaf982 (modify)
                   <div className='content'>
                    <h1 className='text-4xl py-16'>{parking.name}</h1>
                       <p className='mt-10 text-xl'>
                         <div className='flex  py-3' ><span >Ville:</span><p className='ml-28' >{parking.city}</p></div>
                         <div className='flex py-3'><span >Place Libre:</span><p className='ml-12'>{parking.nbrPlaceLibre}</p></div>
                         <div className='flex py-3' ><span >Tarif:</span><p className='ml-28' >{TarifPark.prix}</p></div>
                        </p>
                    </div>
                  </div>   
                    
=======
              <div key={parking.id} className="ml-32 mt-20 max-w-lg  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className=' bg-emerald-500 rounded-lg text-white text-center py-5 w-full font-mono text-3xl'>{parking.name}</div>
                <div className='flex'>
                  <div className='p-8 mt-10 mb-8'>
                    <div className=' flex pb-2'><span className='text-lg mr-10'>Ville:</span><h5 className="ml-12">{parking.city}</h5></div>
                    <div className=' flex pb-2'><span className='text-lg mr-9'>Place Libre:</span><p className="font-normal text-gray-700 dark:text-gray-400">{parking.nbrPlaceLibre}</p></div>
                    <div className=' flex pb-2'><span className='text-lg mr-10'>Tarif:</span><p className="font-normal text-gray-700 dark:text-gray-400 ml-12">{TarifPark.prix} Dh</p></div>
                    <div className=' flex pb-2'><span className='text-lg mr-10'>Type Tarif:</span><p className="font-normal text-gray-700 dark:text-gray-400 ml-12">{TypeTarif.type}</p></div>
=======
              <div key={parking.id} className="box">
                  <div className='content'>
                  <h1 className='text-4xl py-16'>{parking.name}</h1>
                      <p className='mt-10 text-xl'>
                        <div className='flex  py-3' ><span >Ville:</span><p className='ml-28' >{parking.city}</p></div>
                        <div className='flex py-3'><span >Place Libre:</span><p className='ml-12'>{parking.nbrPlaceLibre}</p></div>
                        <div className='flex py-3' ><span >Tarif:</span><p className='ml-28' >{TarifPark.prix}</p></div>
                        <div className='flex py-3' ><span >Type Tarif:</span><p className='ml-28' >{TypeTarif.type}</p></div>
                      </p>
>>>>>>> af0e920 (m)
                  </div>
              </div>      
            )
          }
        })
      }
    </div>
)}

export default ShowPage
