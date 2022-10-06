import React from "react";
import style from '../profilePage/profilePage.module.css'

const ProfilePage = ({ user, setProfile }) => {

    if (!user) return null

    return (
        <div className={style.wrapper}>
            <div>
                <div className={style.modal__dialog}>
                    <h1>Perfil de Usuario</h1>
                    <h1>Nombre: {user.name}</h1>
                    <h1>Speak: {user.speak}</h1>
                    <h1>Edad: {user.edad}</h1>
                    <h1>Estatura: {user.estatura} mts</h1>
                    <button onClick={() => setProfile(null)}>Clear/Back</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;