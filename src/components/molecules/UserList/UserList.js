import React from "react";
import styles from "./UserList.module.css";

// vamos a tener q recibir el listado por props
// array de objetos [{},{},{}]
function UsersList({ userList, onUpdate }) {

  const handleRemove = (u) => {
    onUpdate({
      user: u,
      action: 'remove'
    })
  };

  const handleEdit = (u) => {
    onUpdate({
      user: u,
      action: 'edit'
    })
  };

  const handleView = (id) => {
    console.log("VIEW", id);
    // redirect a la profile page
    // la accion termina en esta funcion
  };

  return (
    <>
      <div class={styles.table}>
        <table>
          <tr>
            <th>#ID</th>
            <th>Usuario</th>
            <th colspan="3">Opciones</th>
          </tr>
          {userList.map((item) => (
            <tr key={item.id}>
              <td>
                <span>{item.id}</span>
              </td>
              <td>
                <span>{item.name}</span>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleEdit(item);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleRemove(item);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleView(item.id);
                  }}
                >
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default UsersList;
