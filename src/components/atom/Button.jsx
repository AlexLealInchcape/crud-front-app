import React from "react";
import styles from '../atom/button.module.css';
import clsx from 'clsx';

const Button = ({ action, label, variant }) => {
    return (
        <div>
            <button className={
                clsx({
                    [styles.button]: true,
                    [styles.text]: variant === 'text',
                    [styles.filled]: variant === 'filled',
                    [styles.outlined]: variant === 'outlined'
                })
            } type="submit" onClick={action}>{label}</button>
        </div>
    )
}

export default Button;