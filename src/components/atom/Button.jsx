import React from "react";
import style from '../atom/button.module.css';

const Button = ({ action, label }) => {
    return (
        <div>
            <button className={style.btn1} type="submit" onClick={action}>{label}</button>
        </div>
    )
}

export default Button;