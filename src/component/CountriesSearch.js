import React from 'react'

const CountriesSearch = ({newFilter,handFilterChange}) => {
    return (
        <>
            <h1>BUSCAR PAISES</h1>
            Encontrar paises: <input
                type={'text'}
                value={newFilter}
                onChange={handFilterChange} />
        </>
    )
}

export default CountriesSearch