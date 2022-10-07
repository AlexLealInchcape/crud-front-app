import { useEffect, useState } from 'react';
import axios from "axios";
import AddUpdate from './components/molecules/addUpdate/AddUpdate';
import ProfilePage from './components/molecules/profilePage/ProfilePage';
import Search from './components/molecules/SearchBar/SearchBar';
import UsersList from './components/molecules/UserList/UserList';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';

// const fakeData = [
//   {
//       id: 1,
//       name: "Jaime",
//       speak: "Hi",
//       edad: 24,
//       estatura: 1.83
//   },
//   {
//     id: 2,
//     name: "Rogelio",
//     speak: "Hellow",
//     edad: 30,
//     estatura: 1.90
// },
// {
//   id: 3,
//   name: "Rogelio",
//   speak: "Hellow",
//   edad: 30,
//   estatura: 1.90
// },
// {
//   id: 4,
//   name: "Rogelio",
//   speak: "Hellow",
//   edad: 30,
//   estatura: 1.90
// },
//  {
//   id: 5,
//   name: "Rogelio",
//   speak: "Hellow",
//   edad: 30,
//   estatura: 1.90
// }
// ]

function App() {
  // listado de usuarios que nos da el back
  const [userList, setUserList] = useState([])
  const [search, setSearch] = useState('')
  const [profile, setProfile] = useState(null)

  // estado para manejar los botones de la lista
  // si queremos editar, borrar o ver el perfil
  const [modifyUser, setModifyUser] = useState(null)

  const onUserAdded = (newUser) => {
    setUserList([...userList, newUser])
  }

  const getUsers = async () => {
    const response = await axios('https://hellowworldapi.azurewebsites.net/Person')
    const data = response.data
    setUserList(data)
}

useEffect(() => {
  getUsers()
}, [])
  
  // {
  //   user: los datos del user,
  //   action: 'edit' || 'remove'
  // }

  // OPCIONES
  // useEffect que carge inicialmente los usuarios

  const getData = () => {
    //funcion que llama al back pidiendo los datos
    // seguramente la llamemos en el useEffect
  }

   
    const removeUser = async (id) => {
    const response = await axios.delete(`https://hellowworldapi.azurewebsites.net/Person/${id}`)
    if(response.status === 200){
      const filterid = userList.filter(item => item.id !== id)
      setUserList(filterid)
    }
    console.log("Eliminado",response)

    

  }
  
  const updateUser = async (updatedUser) => {
    const id = updatedUser.id
    const response = await axios.put(`https://hellowworldapi.azurewebsites.net/Person/${id}`, updatedUser)
    //getUsers()
    if(response.status === 200){
      const filterid = userList.map(item => {
        if (item.id === updatedUser.id) return updatedUser
        return item
      })
      setUserList(filterid)
    }
    // console.log("Actualizado",response)
  }



  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      {/* SACAR ESTO DESPUES */}
      <br></br>
      <br></br>
      <UsersList userList={userList} onUpdate={setModifyUser} setProfile={setProfile} onDelete={removeUser} />
      <br></br>
      <AddUpdate user={modifyUser?.user} onUserAdded={onUserAdded} onUserUpdated={updateUser}/>

      {/* Poner aca el profile component */}
      <ProfilePage user={profile} setProfile={setProfile}/>
    </div>
  );
}

export default App;
