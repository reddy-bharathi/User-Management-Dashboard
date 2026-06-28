import { FaEdit, FaTrash } from "react-icons/fa";

function UserRow({ user, onEdit, onDelete }) {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Delete ${user.firstName}?`
    );

    if (confirmDelete) {
      onDelete(user.id);
    }
  };

  return (
    <tr>
      <td>{user.id}</td>

      <td>{user.firstName}</td>

      <td>{user.lastName}</td>

      <td>{user.email}</td>

      <td>{user.department}</td>

      <td>
        <button
          className="edit-btn"
          onClick={() => onEdit(user)}
        >
          <FaEdit /> Edit
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          <FaTrash /> Delete
        </button>
      </td>
    </tr>
  );
}

export default UserRow;