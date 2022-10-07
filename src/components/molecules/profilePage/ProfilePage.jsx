import React from "react";
import style from '../profilePage/profilePage.module.css'

const ProfilePage = ({ user, setProfile }) => {

    if (!user) return null

    return (
        <div className={style.wrapper}>
            <div>
                <div className={style.modal__dialog}>
                    <h2>Perfil de Usuario</h2>
                    <h3>Nombre:</h3><p> {user.name}</p>
                    <h3>Speak: </h3><p>{user.speak}</p>
                    <h3>Edad: </h3><p>{user.edad}</p>
                    <h3>Estatura: </h3><p>{user.estatura}mts </p>
                    <button onClick={() => setProfile(null)}>Clear/Back</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;