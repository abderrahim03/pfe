import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShowPage = () => {
    const {id} = useParams()
    const [parkings, setParkings] = useState([])
    const [TarifParks, setTarifParks] = useState([])
    const [TarifPark, setTarifPark] = useState({})

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
    const getTarifPark = () => {
      TarifParks.forEach(TarifPark => {
        if (TarifPark.id == id) {
          setTarifPark(TarifPark)
        }
      });
    }

    useEffect(() => {
        getParkings()
        getTarifParks() 
        
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
              <div key={parking.id} className="ml-32 mt-20 max-w-lg  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className=' bg-emerald-500 rounded-lg text-white text-center py-5 w-full font-mono text-3xl'>{parking.name}</div>
                <div className='flex'>
                  <div className='p-8 mt-10 mb-8'>
                    <div className=' flex pb-2'><span className='text-lg mr-10'>Ville:</span><h5 className="ml-12">{parking.city}</h5></div>
                    <div className=' flex pb-2'><span className='text-lg mr-9'>Place Libre:</span><p className="font-normal text-gray-700 dark:text-gray-400">{parking.nbrPlaceLibre}</p></div>
                    <div className=' flex pb-2'><span className='text-lg mr-10'>Tarif:</span><p className="font-normal text-gray-700 dark:text-gray-400 ml-12">{TarifPark.prix}</p></div>
                  </div>
                  <div className='w-full bg-black rounded-lg m-4'></div>
                </div> 
              </div>         
            )
          }
        })
      }
    </div>
)}

export default ShowPage
