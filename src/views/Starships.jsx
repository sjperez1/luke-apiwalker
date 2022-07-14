import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import ErrorPage from './ErrorPage'

const Starships = () => {
    const {id} = useParams()
    const [starship, setStarship] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(response => {
                console.log(response.data) 
                setStarship(response.data)})
            .catch(err=> {
                // need to clear the drop down input in order for the error to be able to show up if there is an error in the request because other wise the previous valid search will stick.
                setStarship("")
                console.log(err)})
    }, [id])

    return (
        <div>
            {
                starship?
                <div>
                    <h1>{starship.name}</h1>
                    <p>Model: {starship.model}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Passengers: {starship.passengers}</p>
                    <p>Cost in Credits: {starship.cost_in_credits}</p>
                </div>
                :<ErrorPage/>
            }
        </div>
    )
}

export default Starships