import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import ShowUsers from "./Users/ShowUsers";
import { useState } from "react";
import "./App.css";

function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [idInput, setIdInput] = useState<number | null>(null);

  const handleEditUser = () => {
    const id = parseInt(idInput?.toString()!);
    if (!isNaN(id)) {
      setEditUserId(id);
      setShowEditUser(true);
    }
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <button onClick={() => setShowUsers(true)}>Show Users</button>
      {showUsers && <ShowUsers />}
      <br />
      <button onClick={() => setShowAddUser(true)}>Add User</button>
      {showAddUser && <AddUser />}
      <br />
      <label>
        Edit User ID:
        <input type="number" onChange={(e) => setIdInput(+e.target.value)} />
      </label>
      <button onClick={handleEditUser}>Edit User</button>
      {showEditUser && editUserId && <EditUser id={editUserId!} />}
    </div>
  );
}

export default App;
