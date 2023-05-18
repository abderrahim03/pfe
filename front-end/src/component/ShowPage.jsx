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
                <div key={parking.id} className="box">
                   <div className='content'>
                    <h1 className='text-4xl py-16'>{parking.name}</h1>
                       <p className='mt-10 text-xl'>
                         <div className='flex  py-3' ><span >Ville:</span><p className='ml-28' >{parking.city}</p></div>
                         <div className='flex py-3'><span >Place Libre:</span><p className='ml-12'>{parking.nbrPlaceLibre}</p></div>
                         <div className='flex py-3' ><span >Tarif:</span><p className='ml-28' >{TarifPark.prix}</p></div>
                        </p>
                    </div>
                  </div>   
                    
            )
          }
        })
      }
    </div>
)}

export default ShowPage
