import { useEffect, useState } from "react";
import { getUsers } from "./Api";
import { User } from "../Types";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.email}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
