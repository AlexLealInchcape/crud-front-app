import React, { useState, useEffect } from "react";

const initialPersonas = [
    {
        id: 1,
        name: "Jaime",
        speak: "Hi",
        edad: 24,
        estatura: 1.83
    },
    {
        id: 2,
        name: "Rogelio",
        speak: "Hellow",
        edad: 30,
        estatura: 1.90
    }
]

const AddUpdate = () => {

    const [personas, setPersonas] = useState(initialPersonas);
    const [persona, setPersona] = useState({})
    const [verificar, setVerificar] = useState(false)
    const { id, name, speak, edad, estatura } = persona

    const verify = (id) => {
        const findId = personas.find(item => item.id === id)
        if (findId) {
            setPersona(findId)
            setVerificar(true)
        } else {
            setVerificar(false)
        }
    }

    useEffect(() => {
        verify(6)
    }, [personas])

    const addUser = () => {
        console.log('Add User')
    }

    const updateUser = () => {
        console.log('Update User')
    }

    return (
        <div>
            {
                !verificar
                    ? <div>
                        <h1>ADD PERSON</h1>
                        <input placeholder="name:STR" defaultValue=''></input>
                        <input placeholder="speak:STR" defaultValue=''></input>
                        <input placeholder="edad:NUMBER" defaultValue=''></input>
                        <input placeholder="estatura:DOUBLE" defaultValue=''></input>
                        <button onClick={addUser}>SEND ADD</button>
                    </div>
                    :
                    <div>
                        <h1>UPDATE PERSON</h1>
                        <input placeholder="name:STR" defaultValue={name}></input>
                        <input placeholder="speak:STR" defaultValue={speak}></input>
                        <input placeholder="edad:NUMBER" defaultValue={edad}></input>
                        <input placeholder="estatura:DOUBLE" defaultValue={estatura}></input>
                        <button onClick={updateUser}>SEND UPDATE</button>
                    </div>
            }
        </div>
    )
}

export default AddUpdate;