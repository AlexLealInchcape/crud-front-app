import React from "react";
import Button from "../../atom/Button";
import styles from "./UserList.module.css";


// vamos a tener q recibir el listado por props
// array de objetos [{},{},{}]
function UsersList({ userList, onUpdate, setProfile, onDelete, setShowAddUpdate }) {

  
  const handleEdit = (u) => {
    setShowAddUpdate(true)
    onUpdate({
      user: u,
      action: 'edit'
    })
  };

  const handleView = (user) => {
    const { id } = user
    console.log("VIEW", id);
    // redirect a la profile page
    setProfile(user)
    // la accion termina en esta funcion
  };

  return (
    <>
    <div className={styles.padre}>
      <div className={styles.table}>

        <table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Usuario</th>
              <th colSpan="3">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {userList?.map((item) => (
              <tr key={item.id}>
                <td>
                  <span>{item.id}</span>
                </td>
                <td>
                  <span>{item.name}</span>
                </td>
                <td>
                  <Button
                    variant='text'
                    label='Edit'
                    action={() => {
                      handleEdit(item);
                    }}
                  />
                </td>
                <td>
                  <Button
                    variant='text'
                    label='Delete'
                    action={() => {
                      onDelete(item.id);
                    }}
                  />
                </td>
                <td>
                  <Button
                    variant='text'
                    label='View Profile'
                    action={() => {
                      handleView(item);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default UsersList;
