
import React from "react";
import Button from "../../atom/Button";
import style from './searchBar.module.css';

const Search = ({ search, setSearch, setShowAddUpdate }) => {

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const clearSearch = () => {
        setSearch('')
    }

    const handleAdd =() =>{
        setShowAddUpdate(true)
    }

    return (
        <div className={style.padre}>
            <div className={style.search}>
                <h2>C.R.U.D</h2>
                <input className={style.input} value={search} onChange={e => handleChange(e)} placeholder="Search..." />
                <Button action={clearSearch} label='Clear Search' />
                <Button action={handleAdd} label='Agregar' />
            </div>
        </div>
    )
}

export default Search;