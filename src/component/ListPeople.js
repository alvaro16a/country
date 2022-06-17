import React from 'react'


const ListPeople = ({ filteredCountries, setNewFilter}) => {

    return (

        <ul>
            {
                filteredCountries.map(country => (
                    <li
                        key={country.name.common} >{country.name.common}
                        <button onClick={() => setNewFilter(country.name.common)}>SHOW</button>
                    </li>
                ))
            }
        </ul>

    )
}

export default ListPeople