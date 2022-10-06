import { useState } from 'react';
import './App.css';
import AddUpdate from './components/molecules/addUpdate/AddUpdate';
import ProfilePage from './components/molecules/profilePage/ProfilePage';
import Search from './components/molecules/SearchBar/SearchBar';
import UsersList from './components/molecules/UserList/UserList';

const fakeData = [
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
},
{
  id: 3,
  name: "Rogelio",
  speak: "Hellow",
  edad: 30,
  estatura: 1.90
},
{
  id: 4,
  name: "Rogelio",
  speak: "Hellow",
  edad: 30,
  estatura: 1.90
},
 {
  id: 5,
  name: "Rogelio",
  speak: "Hellow",
  edad: 30,
  estatura: 1.90
}
]

function App() {
  // listado de usuarios que nos da el back
  const [userList, setUserList] = useState(fakeData)
  const [search, setSearch] = useState('')
  const [profile, setProfile] = useState(null)

  // estado para manejar los botones de la lista
  // si queremos editar, borrar o ver el perfil
  const [modifyUser, setModifyUser] = useState(null)

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

  const removeUser = () => {
    // remove user en el back
  }
  
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      {/* SACAR ESTO DESPUES */}
      <br></br>
      <br></br>
      <UsersList userList={userList} onUpdate={setModifyUser} setProfile={setProfile}/>
      <br></br>
      <AddUpdate user={modifyUser?.user} />

      {/* Poner aca el profile component */}
      <ProfilePage user={profile} setProfile={setProfile}/>
    </div>
  );
}

export default App;
