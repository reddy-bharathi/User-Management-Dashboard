import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Header from "./components/Header";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import FilterModal from "./components/FilterModal";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./api/userService";

import { filterUsers } from "./utils/filter";
import { sortUsers } from "./utils/sort";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const [filterOpen, setFilterOpen] = useState(false);

  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      setLoading(true);

      const data = await getUsers();

      const formatted = data.map((user) => ({
        id: user.id,
        firstName: user.name.split(" ")[0],
        lastName: user.name.split(" ").slice(1).join(" "),
        email: user.email,
        department: "Engineering",
      }));

      setUsers(formatted);
    } catch (err) {
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  }

  const filteredUsers = useMemo(() => {
    const filtered = filterUsers(users, searchTerm, filters);
    return sortUsers(filtered, sortField, sortDirection);
  }, [users, searchTerm, filters, sortField, sortDirection]);

  const currentUsers = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredUsers.slice(start, start + rowsPerPage);
  }, [filteredUsers, currentPage, rowsPerPage]);

  async function addUser(user) {
    const res = await createUser(user);

    setUsers([
      ...users,
      {
        ...user,
        id: res.id || users.length + 1,
      },
    ]);

    toast.success("User Added");
  }

  async function editUser(user) {
    await updateUser(user.id, user);

    setUsers(users.map((u) => (u.id === user.id ? user : u)));

    setEditingUser(null);

    toast.success("User Updated");
  }

  async function removeUser(id) {
    await deleteUser(id);

    setUsers(users.filter((u) => u.id !== id));

    toast.success("User Deleted");
  }

  function handleSort(field) {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  }

  return (
    <>
      <ToastContainer />

      <Header />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {!loading && (
        <>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <button
            onClick={() => setFilterOpen(true)}
          >
            Filters
          </button>

          <FilterModal
            isOpen={filterOpen}
            onClose={() => setFilterOpen(false)}
            filters={filters}
            setFilters={setFilters}
          />

          <UserForm
            editingUser={editingUser}
            onAdd={addUser}
            onUpdate={editUser}
            clearEditing={() => setEditingUser(null)}
          />

          <UserTable
            users={currentUsers}
            onEdit={setEditingUser}
            onDelete={removeUser}
            onSort={handleSort}
            sortField={sortField}
            sortDirection={sortDirection}
          />

          <Pagination
            totalUsers={filteredUsers.length}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            setCurrentPage={setCurrentPage}
            setRowsPerPage={setRowsPerPage}
          />
        </>
      )}
    </>
  );
}

export default App;