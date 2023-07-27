import React, { useState } from "react";
import { createUser } from "./Api";

const AddUser = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { id, name, email, password, role };
    await createUser(user);
    setId(0);
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
    console.log(
      `User added ${user.email} ${user.name} ${user.password} ${user.role}`
    );
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Role:
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
