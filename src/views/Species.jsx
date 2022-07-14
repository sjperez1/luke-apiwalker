import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import ErrorPage from './ErrorPage'
const Species = () => {
    const {id} = useParams()
    const [specie, setSpecie] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/species/${id}`)
            .then(response => {
                console.log(response.data) 
                setSpecie(response.data)})
            .catch(err=> {
                // need to clear the drop down input in order for the error to be able to show up if there is an error in the request because other wise the previous valid search will stick.
                setSpecie("")
                console.log(err)})
    }, [id])

    return (
        <div>
            {
                specie?
                <div>
                    <h1>{specie.name}</h1>
                    <p>Average Height: {specie.average_height}</p>
                    <p>Average Lifespan: {specie.average_lifespan}</p>
                    <p>Classification: {specie.classification}</p>
                    <p>Language: {specie.language}</p>
                </div>
                :<ErrorPage/>
            }
        </div>
    )
}

export default Species