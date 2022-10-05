import React from "react";
import style from '../atom/button.module.css';

const Button = ({handleSubmit, handleMostrar}) => {

    return (
        <div>
            <button className={style.btn1} type="submit" onClick={handleMostrar}>mostrar todos</button>
            <button className={style.btn2} type="submit" onClick={handleSubmit}>search</button>
        </div>
    )
}

export default Button;