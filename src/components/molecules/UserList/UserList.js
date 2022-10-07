import React from "react";
import styles from "./UserList.module.css";

// vamos a tener q recibir el listado por props
// array de objetos [{},{},{}]
function UsersList({ userList, onUpdate, setProfile }) {

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
                      handleView(item);
                    }}
                  >
                    View Profile
                  </button>
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
