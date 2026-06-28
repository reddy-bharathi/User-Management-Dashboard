import { useEffect, useState } from "react";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../api/userService";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);

      const response = await getUsers();

      const formattedUsers = response.map((user) => ({
        id: user.id,
        firstName: user.name.split(" ")[0],
        lastName: user.name.split(" ").slice(1).join(" "),
        email: user.email,
        department: "Engineering",
      }));

      setUsers(formattedUsers);
      setError("");
    } catch (err) {
      setError("Unable to fetch users.");
    } finally {
      setLoading(false);
    }
  }

  async function addUser(user) {
    const response = await createUser(user);

    setUsers((prev) => [
      ...prev,
      {
        ...user,
        id: response.id || prev.length + 1,
      },
    ]);
  }

  async function editUser(user) {
    await updateUser(user.id, user);

    setUsers((prev) =>
      prev.map((u) => (u.id === user.id ? user : u))
    );
  }

  async function removeUser(id) {
    await deleteUser(id);

    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );
  }

  return {
    users,
    loading,
    error,
    fetchUsers,
    addUser,
    editUser,
    removeUser,
  };
}