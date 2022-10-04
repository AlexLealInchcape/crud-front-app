
import React, { useState } from "react";
import style from './searchBar.module.css';

const Search = () => {

    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
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
            <div className={style.btns}>
                <button className={style.btn1} type="submit" onClick={handleMostrar}>mostrar todos</button>
                <button className={style.btn2} type="submit" onClick={handleSubmit}>search</button>
            </div>
        </div>
    )
}

export default Search;