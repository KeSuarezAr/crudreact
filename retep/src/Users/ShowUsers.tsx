import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./Api";
import { User } from "../Types";

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
    setUsers(users.filter((user: any) => user.id !== id));
  };

  return (
    <div>
      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowUsers;
