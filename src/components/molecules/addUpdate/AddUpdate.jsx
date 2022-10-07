import React, { useState } from "react";
import axios from "axios";
import Button from "../../atom/Button";
import styles from "./AddUpdate.module.css";

const initialValues = {
    name: '',
    speak: '',
    edad: 0,
    estatura: 0
}

const AddUpdate = ({ user, onUserAdded }) => {
    const addUser = () => {
        console.log("Add User");
    };

    const [nameUser, setNameUser] = useState(initialValues)

    const handleChange = (e) => {
        e.preventDefault()
        let type = e.target.name
        let value = e.target.value
        const currentValue = nameUser

        if (type === 'edad') {
            let texto = parseFloat(value)
            currentValue[type] = texto
            console.log('edad', typeof texto)
            return setNameUser(currentValue)
        }

        if (type === 'estatura') {
            let texto = parseFloat(value)
            currentValue[type] = texto
            console.log('estatura', typeof texto)
            return setNameUser(currentValue)
        }
        currentValue[type] = value
        setNameUser(currentValue)
    }

    const createUser = async () => {
        const response = await axios.post('https://hellowworldapi.azurewebsites.net/Person', nameUser)
        const data = response.data.data
        onUserAdded(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!nameUser.name || !nameUser.speak || !nameUser.edad || !nameUser.estatura) {
            alert('faltan campos')
        } else {
            createUser()
        }
    }

    const updateUser = () => {
        console.log('updateUser')
    }

    return (
        <div class={styles.padre}>
            {user ? (
                <>
                    <h1>Editar Usuario</h1>
                    <form action={updateUser}>
                        <div class={styles.form}>
                            <div>
                                <label htmlFor="">Nombre:</label>
                                <input placeholder="name:STR" defaultValue={user.name}></input>
                            </div>
                            <div>
                                <label htmlFor="">Speak:</label>
                                <input
                                    placeholder="speak:STR"
                                    defaultValue={user.speak}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="">Edad:</label>
                                <input
                                    placeholder="edad:NUMBER"
                                    defaultValue={user.edad}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="">Estatura:</label>

                                <input
                                    placeholder="estatura:DOUBLE"
                                    defaultValue={user.estatura}
                                ></input>
                            </div>
                            <div>
                                <Button action={updateUser} label={user ? 'Editar' : 'Crear'} variant="text" />
                            </div>
                        </div>
                    </form>
                </>
            ) : (
                <>
                    <h1>Agregar Usuario</h1>

                    <form action={handleSubmit}>
                        <div class={styles.form}>
                            <div>

                                <label htmlFor="">Nombre:</label>
                                <input placeholder="name:STR" defaultValue="" name='name' onChange={(e) => handleChange(e)}></input>
                            </div>
                            <div>
                                <label htmlFor="">Speak:</label>
                                <input placeholder="speak:STR" defaultValue="" name='speak' onChange={(e) => handleChange(e)}></input>
                            </div>
                            <div>
                                <label htmlFor="">Edad:</label>

                                <input placeholder="edad:NUMBER" defaultValue="" name='edad' onChange={(e) => handleChange(e)}></input>
                            </div>
                            <div>
                                <label htmlFor="">Estatura:</label>
                                <input placeholder="estatura:DOUBLE" defaultValue="" name='estatura' onChange={(e) => handleChange(e)}></input>
                            </div>
                            <div>
                                <Button action={handleSubmit} label={!user ? 'Crear' : 'Editar'} variant="text" />
                            </div>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};


export default AddUpdate;
