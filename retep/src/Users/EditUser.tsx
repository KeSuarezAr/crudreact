import React, { useState, useEffect } from "react";
import { updateUser, getUser } from "./Api";
import { User } from "../Types";

interface Props {
  id: number;
}

const EditUser = ({ id }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(id!);
      setUser(user);
      setName(user.name);
      setEmail(user.email);
      setPassword(user.password);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedUser: User = { id: user?.id!, name, email, password };
    await updateUser(id!, updatedUser);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit User</h2>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
