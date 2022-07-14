import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Form = () => {
    const [starwars, setStarwars] = useState()
    const [resource, setResource] = useState("")
    const [id, setId] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${resource}/${id}`)
        // clear the id after submitting to avoid errors, such as being able to show the error page when applicable
        setId("")
    }

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/`)
            .then(response => {

                // console.log(Object.keys(response.data)) 
                setStarwars(Object.keys(response.data))})
            .catch(err=> console.log(err))
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Search for:</label>
                        <select name="resource" value={resource} onChange={e => setResource(e.target.value)}>
                            <option hidden>Choose a resource</option>
                            {starwars && starwars.map((eachresource, i)=>{
                                    return (
                                        <option key={i}>{eachresource}</option>
                                )})}
                        </select>
                    <label>ID: </label>
                    <input type="number" name="id" value={id} min="0" onChange={e => setId(e.target.value)}/>
                </div>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Form