import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import ErrorPage from './ErrorPage'
const Films = () => {
    const {id} = useParams()
    const [film, setFilm] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/films/${id}`)
            .then(response => {
                console.log(response.data) 
                setFilm(response.data)})
            .catch(err=> {
                // need to clear the drop down input in order for the error to be able to show up if there is an error in the request because other wise the previous valid search will stick.
                setFilm("")
                console.log(err)})
    }, [id])

    return (
        <div>
            {
                film?
                <div>
                    <h1>{film.title}</h1>
                    <p>Director: {film.director}</p>
                    <p>Producer(s): {film.producer}</p>
                    <p>Episode ID: {film.episode_id}</p>
                    <p>Opening Crawl: {film.opening_crawl}</p>
                </div>
                :<ErrorPage/>
            }
        </div>
    )
}

export default Films