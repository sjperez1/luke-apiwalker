import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import ErrorPage from './ErrorPage'
const People = () => {
    const {id} = useParams()
    const [person, setPerson] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data) 
                setPerson(response.data)})
            .catch(err=> {
                // need to clear the drop down input in order for the error to be able to show up if there is an error in the request because other wise the previous valid search will stick.
                setPerson("")
                console.log(err)})
    }, [id])

    return (
        <div>
            {
                person?
                <div>
                    <h1>{person.name}</h1>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Skin Color: {person.skin_color}</p>
                </div>
                :<ErrorPage/>
            }
            
        </div>
    )
}

export default People