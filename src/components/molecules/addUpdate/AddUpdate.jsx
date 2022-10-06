import React from "react";
import Button from "../../atom/Button";
import styles from "./AddUpdate.module.css"

const AddUpdate = ({ user }) => {

    const addUser = () => {
        console.log('Add User')
    }

    const updateUser = () => {
        console.log('Update User')
    }

    return (
        <div class={styles.padre}>
            <div class={styles.Add}>
            {user ? (
                <>
                <h1>Editar Usuario</h1>
                <form action={updateUser}>
                <label htmlFor="">Nombre:</label>
                <input placeholder="name:STR" defaultValue={user.name}></input>
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
                <form action={addUser}>
                <label htmlFor="">Nombre:</label>
                <input placeholder="name:STR" defaultValue=''></input>
                <label htmlFor="">Speak:</label>
                <input placeholder="speak:STR" defaultValue=''></input>
                <label htmlFor="">Edad:</label>
                <input placeholder="edad:NUMBER" defaultValue=''></input>
                <label htmlFor="">Estura:</label>
                <input placeholder="estatura:DOUBLE" defaultValue=''></input>

                <Button action={addUser} label={!user ? 'crear' : 'Editar'} variant="text" />
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
