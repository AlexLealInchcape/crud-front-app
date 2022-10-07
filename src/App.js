import { useEffect, useState } from 'react';
import axios from "axios";
import AddUpdate from './components/molecules/addUpdate/AddUpdate';
import ProfilePage from './components/molecules/profilePage/ProfilePage';
import Search from './components/molecules/SearchBar/SearchBar';
import UsersList from './components/molecules/UserList/UserList';
import './App.css';

function App() {
  // listado de usuarios que nos da el back
  const [userList, setUserList] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [profile, setProfile] = useState(null)

  // estado para manejar los botones de la lista
  // si queremos editar, borrar o ver el perfil
  const [modifyUser, setModifyUser] = useState(null)
  const [showAddUpdate, setShowAddUpdate] =useState(false)
  const onUserAdded = (newUser) => {
    setUserList([...userList, newUser])
  }

  const getUsers = async () => {
    const response = await axios('https://hellowworldapi.azurewebsites.net/Person')
    const data = response.data
    setUserList(data)
}

useEffect(() => {
  const numberRegex = /[0-9]/.test(search);
  if(numberRegex) {
    const number = parseInt(search)
    const filtradoId = userList.filter(item => item.id === number)
    return setFiltered(filtradoId)
  }

  if(typeof search === 'string') {
    const filtrado = userList.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    return setFiltered(filtrado)
  }
}, [search])

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
  }



  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} setShowAddUpdate={setShowAddUpdate} />
      {/* SACAR ESTO DESPUES */}
      <br></br>
      <br></br>
      <UsersList userList={filtered.length > 0 ? filtered : userList} onUpdate={setModifyUser} setProfile={setProfile} onDelete={removeUser} />
      <br></br> {
        showAddUpdate ? <AddUpdate user={modifyUser?.user} onUserAdded={onUserAdded} onUserUpdated={updateUser}/>:null
      }
      
      {/* Poner aca el profile component */}
      <ProfilePage user={profile} setProfile={setProfile}/>
    </div>
  );
}

export default App;
