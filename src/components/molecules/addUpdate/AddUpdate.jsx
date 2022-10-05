import React from "react";
import Button from "../../atom/Button";

const AddUpdate = ({ user }) => {

    const addUser = () => {
        console.log('Add User')
    }

    const updateUser = () => {
        console.log('Update User')
    }

    return (
        <div>
            {user ? (
                <>
                <h1>EDIT PERSON</h1>
                <input placeholder="name:STR" defaultValue={user.name}></input>
                <input placeholder="speak:STR" defaultValue={user.speak}></input>
                <input placeholder="edad:NUMBER" defaultValue={user.edad}></input>
                <input placeholder="estatura:DOUBLE" defaultValue={user.estatura}></input>
                <Button action={updateUser} label='texto' variant="text" />
                </>
            ) : (
                <>
                <h1>ADD PERSON</h1>
                <input placeholder="name:STR" defaultValue=''></input>
                <input placeholder="speak:STR" defaultValue=''></input>
                <input placeholder="edad:NUMBER" defaultValue=''></input>
                <input placeholder="estatura:DOUBLE" defaultValue=''></input>
                <Button action={addUser} label='texto' variant="text" />
                </>
            )}
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
