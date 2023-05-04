import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShowPage = () => {
    const {id} = useParams()
    const [parkings, setParkings] = useState([])

    const  getParkings = async () => {
        await axios.get('http://127.0.0.1:8000/api/parkings').then((res, req) => {
            setParkings(res.data.data); 
        })
    }

    useEffect(() => {
        getParkings()
    }, [])


  return (
    <div>
      test  {
        parkings.map(parking => {
            if (parking.id == id) {
                return (
                    <h1>{parking.city}</h1>
                )
            }
        })
      }
    </div>
  )
}

export default ShowPage
