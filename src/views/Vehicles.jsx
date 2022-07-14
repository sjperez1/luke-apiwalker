import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import ErrorPage from './ErrorPage'

const Vehicles = () => {
    const {id} = useParams()
    const [vehicle, setVehicle] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/vehicles/${id}/`)
            .then(response => {
                console.log(response.data) 
                setVehicle(response.data)})
            .catch(err=> {
                // need to clear the drop down input in order for the error to be able to show up if there is an error in the request because other wise the previous valid search will stick.
                setVehicle("")
                console.log(err)})
                
            
    }, [id])

    return (
        <div>
            {
                vehicle?
                <div>
                    <h1>{vehicle.name}</h1>
                    <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
                    <p>Passengers: {vehicle.passengers}</p>
                    <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
                    <p>Cost in Credits: {vehicle.cost_in_credits}</p>
                </div>
                :<ErrorPage/>
            }
        </div>
    )
}

export default Vehicles