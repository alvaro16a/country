import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


const ShowCountry = ({ country, api_key }) => {

    const [clima,setClima]=useState([])

    useEffect(() => {
        const url=`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital[0]}`
        console.log(url)
        axios
            .get(url)
            .then(respuesta => {
                setClima(respuesta.data)
            })
    },[])

    return (
        <>
            <h1>{country.name.common}</h1>
            <p>{`CAPITAL: ${country.capital[0]}`}</p>
            <p>{`POBLACION: ${country.population} millones de personas`}</p>
            <h4>{`Lenguajes:`}</h4>
            <ul>{
                Object.values(country.languages).map(lengua => (
                    <li key={lengua}>{lengua}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.name.common}></img>
            <h3>{`clima en  ${country.capital[0]}`}</h3>
            <p>{`TEMPERATURAs: ${clima.current}`}</p>
        </>
    )
}

export default ShowCountry