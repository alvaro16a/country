import React from 'react'
import ListPeople from './ListPeople'
import ShowCountry from './ShowCountry'

const SearchResult = ({ filteredCountries, newFilter, setNewFilter, api_key }) => {

    if (filteredCountries.length === 0 && newFilter === '') {
        return (
            <>
                <h2>RESULTADOS</h2>
                <p>Debes ingresar almenos una letra</p>
            </>
        )
    } else if (filteredCountries.length === 0) {
        return (
            <>
                <h2>RESULTADOS</h2>
                <p>No hay pais que cumpla estas condiciones</p>
            </>
        )

    } else if (filteredCountries.length === 1) {
        return (
            <>
                <h2>RESULTADOS</h2>
                <ShowCountry
                    api_key={api_key}
                    country={filteredCountries[0]} />
            </>
        )


    } else if (filteredCountries.length <= 10) {
        return (
            <>
                <h2>RESULTADOS</h2>
                <ListPeople
                    filteredCountries={filteredCountries}
                    setNewFilter={setNewFilter} />
            </>
        )
    } else {
        return (
            <>
                <h2>RESULTADOS</h2>
                <p>Muchos paises cumplen, se mas especifico</p>
            </>
        )

    }

}

export default SearchResult