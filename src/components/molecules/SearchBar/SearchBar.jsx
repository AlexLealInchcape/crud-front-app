
import React from "react";
import Button from "../../atom/Button";
import style from './searchBar.module.css';

const Search = ({search, setSearch}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('search', search)
    }

    const handleChange = (e) => {
        e.preventDefault()
        let consolex = e.target.value
        console.log("🚀 ~ console ->", consolex)
        setSearch(e.target.value)
    }

    const handleMostrar = () => {
        console.log('Funcion mostrar todos')
    }

    return (
        <div>
            <h2 className={style.search}>Search</h2>
            <input className={style.input} value={search} onChange={e => handleChange(e)} placeholder="Search..." />
            <div>
                <Button action={handleMostrar} label='Mostrar todos' />
                <Button action={handleSubmit} label='Search' />
            </div>
        </div>
    )
}

export default Search;