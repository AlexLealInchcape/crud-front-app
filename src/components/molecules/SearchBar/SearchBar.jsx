
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
        <div class={style.padre}>
        <div class={style.search}>
            <h2 >C.R.U.D</h2>
            <input class={style.input} value={search} onChange={e => handleChange(e)} placeholder="Search..." />
                <Button action={handleSubmit} label='Buscar' />
                <Button action={handleMostrar} label='Mostrar todos' />
                
        </div>
        </div>
    )
}

export default Search;