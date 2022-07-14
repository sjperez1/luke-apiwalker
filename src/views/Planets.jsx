import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import ErrorPage from './ErrorPage'

const Planets = () => {
    const {id} = useParams()
    const [planet, setPlanet] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data) 
                setPlanet(response.data)})
            .catch(err=> {
                // need to clear the drop down input in order for the error to be able to show up if there is an error in the request because other wise the previous valid search will stick.
                setPlanet("")
                console.log(err)})
    }, [id])

    return (
        <div>
            {
                planet?
                <div>
                    <h1>{planet.name}</h1>
                    <p>Climate: {planet.climate}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Surface Water: {planet.surface_water}</p>
                    <p>Population: {planet.population}</p>
                </div>
                :<ErrorPage/>
            }
            
        </div>
    )
}

export default Planets