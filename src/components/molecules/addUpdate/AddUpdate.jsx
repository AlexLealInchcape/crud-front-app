import React, { useState } from "react";
import axios from "axios";
import Button from "../../atom/Button";
import styles from "./AddUpdate.module.css"

const initialValues = {
    name: '',
    speak: '',
    edad: 0,
    estatura: 0
}

const AddUpdate = ({ user }) => {

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
        axios.post('https://hellowworldapi.azurewebsites.net/Person', nameUser)
            .then(response => {
                console.log(response.status)
                setNameUser(initialValues)
            })
            .catch((error) => console.log(error))
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
        console.log('Update User')
    }

    return (
        <div className={styles.padre}>
            <div className={styles.Add}>
                {user ? (
                    <>
                        <h1>Editar Usuario</h1>
                        <form action={updateUser}>
                            <label htmlFor="">Nombre:</label>
                            <input placeholder="name:STR" defaultValue={user.name} onChange={(e) => handleChange(e, 'name')}></input>
                            <label htmlFor="">Speak:</label>
                            <input placeholder="speak:STR" defaultValue={user.speak}></input>
                            <label htmlFor="">Edad:</label>
                            <input placeholder="edad:NUMBER" defaultValue={user.edad}></input>
                            <label htmlFor="">Estatura:</label>
                            <input placeholder="estatura:DOUBLE" defaultValue={user.estatura}></input>

                            <Button action={updateUser} label={user ? 'Editar' : 'Crear'} variant="text" />
                        </form>
                    </>
                ) : (
                    <>
                        <h1>Agregar Usuario</h1>
                        <form action={handleSubmit}>
                            <label htmlFor="">Nombre:</label>
                            <input placeholder="name:STR" defaultValue='' name='name' onChange={(e) => handleChange(e)}></input>
                            <label htmlFor="">Speak:</label>
                            <input placeholder="speak:STR" defaultValue='' name='speak' onChange={(e) => handleChange(e)}></input>
                            <label htmlFor="">Edad:</label>
                            <input placeholder="edad:NUMBER" defaultValue='' name='edad' onChange={(e) => handleChange(e)}></input>
                            <label htmlFor="">Estura:</label>
                            <input placeholder="estatura:DOUBLE" defaultValue='' name='estatura' onChange={(e) => handleChange(e)}></input>

                            <Button action={handleSubmit} label={!user ? 'crear' : 'Editar'} variant="text" />
                        </form>

                    </>
                )}
            </div>
        </div>
    )
}

export default AddUpdate;


    // const [personas, setPersonas] = useState(initialPersonas);
    // const [persona, setPersona] = useState({})
    // const [verificar, setVerificar] = useState(false)
    // const { id, name, speak, edad, estatura } = persona

    // const verify = (id) => {
    //     const findId = personas.find(item => item.id === id)
    //     if (findId) {
    //         setPersona(findId)
    //         setVerificar(true)
    //     } else {
    //         setVerificar(false)
    //     }
    // }

    // useEffect(() => {
    //     verify(6)
    // }, [personas])



                // !verificar
                //     ? <div>
                //         <h1>ADD PERSON</h1>
                //         <input placeholder="name:STR" defaultValue=''></input>
                //         <input placeholder="speak:STR" defaultValue=''></input>
                //         <input placeholder="edad:NUMBER" defaultValue=''></input>
                //         <input placeholder="estatura:DOUBLE" defaultValue=''></input>
                //         <Button action={addUser} label='texto' variant="text" />
                //     </div>
                //     :
                //     <div>
                //         <h1>UPDATE PERSON</h1>
                //         <input placeholder="name:STR" defaultValue={name}></input>
                //         <input placeholder="speak:STR" defaultValue={speak}></input>
                //         <input placeholder="edad:NUMBER" defaultValue={edad}></input>
                //         <input placeholder="estatura:DOUBLE" defaultValue={estatura}></input>
                //         <button onClick={updateUser}>SEND UPDATE</button>
                //     </div>
