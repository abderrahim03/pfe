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
        parkings.map(parking => {
            if (parking.id == id) {
                return (
                  <div key={parking.id} className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{parking.city}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{parking.nbrPlaceLibre}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{TarifPark.prix}</p>
                  </div>
                  
                )
            }
        })
      }
    </div>
  )
}

export default ShowPage
