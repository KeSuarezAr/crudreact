import axios from "axios";
import { User } from "../Types";

const API_URL = "http://localhost:3001";

const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

const getUser = async (id: number) => {
  const response = await axios.get(`${API_URL}/users/${id}`);
  return response.data;
};

const createUser = async (user: User) => {
  const response = await axios.post(`${API_URL}/users`, user);
  return response.data;
};

const updateUser = async (id: number, user: User) => {
  const response = await axios.put(`${API_URL}/users/${id}`, user);
  return response.data;
};

const deleteUser = async (id: number) => {
  const response = await axios.delete(`${API_URL}/users/${id}`);
  return response.data;
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
