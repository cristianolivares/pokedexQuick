import React, { useContext } from 'react'
import { pokemonContext } from '../../context/Context'
import search from '../../imgs/search.svg'

export const Search = () => {

    const { dispatch } = useContext(pokemonContext)

    const handleSearch = (e) => {
        dispatch({
            type: 'search',
            payload:{
                value: e.target.value
            }
        });
    }

    return (
        // <Nav.Collapse className="mr-auto">
            <a className="navbar-pointer ml-auto" href="!#" 
                onBlur={ e => { e.target.value = null; dispatch({ type: "again", payload: {} }) }} 
                onClick={ (e) => { e.preventDefault(); e.target.value = null } } 
                onChange={handleSearch}>

                <img src={search} alt="search"/>
                <input type="search" placeholder="Buscar Pokemon"></input>
                
            </a> 
      
    )
}
