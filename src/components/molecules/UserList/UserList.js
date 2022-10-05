import React, { useState } from "react";
import styles from "./UsersList.module.css";

const initialList = [
  {
    id: 1,
    firstname: "Juan",
    speak: "Hello World!",
    edad: 25,
    altura: 1.85
  },
  {
    id: 2,
    firstname: "Alex",
    speak: "Hello Guys!",
    edad: 25,
    altura: 1.75
  }
];

// vamos a tener q recibir el listado por props
// array de objetos [{},{},{}]
function UsersList() {
  // temporalmente completo el estado con datos fake
  const [userList, setUserList] = useState(initialList);

  const handleRemove = (id) => {
    console.log("REMOVE", id);
  };

  const handleEdit = (id) => {
    console.log("EDIT", id);
  };

  const handleView = (id) => {
    console.log("VIEW", id);
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
          {userList.map(({ id, firstname }) => (
            <tr key={id}>
              <td>
                <span>{id}</span>
              </td>
              <td>
                <span>{firstname}</span>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleEdit(id);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleRemove(id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleView(id);
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
