import React from "react";

const ProfilePage = ({ user, setProfile }) => {

    return (
        <div>
            {
                user
                    ?
                    <div>
                        <h1>Perfil de Usuario</h1>
                        <h1>Nombre: {user.name}</h1>
                        <h1>Speak: {user.speak}</h1>
                        <h1>Edad: {user.edad}</h1>
                        <h1>Estatura: {user.estatura} mts</h1>
                        <button onClick={() => setProfile(null)}>Clear/Back</button>
                    </div>
                    :
                    <div>
                        <h1>Seleccionar Usuario</h1>
                    </div>
            }
        </div>
    )
}

export default ProfilePage;