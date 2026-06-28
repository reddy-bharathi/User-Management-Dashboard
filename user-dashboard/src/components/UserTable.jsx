import UserRow from "./UserRow";
import "./../styles/table.css";

function UserTable({
  users,
  onEdit,
  onDelete,
  onSort,
  sortField,
  sortDirection,
}) {
  const renderArrow = (field) => {
    if (field !== sortField) return "";

    return sortDirection === "asc" ? " ▲" : " ▼";
  };

  return (
    <div className="table-container">
      <table className="user-table">

        <thead>

          <tr>

            <th onClick={() => onSort("id")}>
              ID{renderArrow("id")}
            </th>

            <th onClick={() => onSort("firstName")}>
              First Name{renderArrow("firstName")}
            </th>

            <th onClick={() => onSort("lastName")}>
              Last Name{renderArrow("lastName")}
            </th>

            <th onClick={() => onSort("email")}>
              Email{renderArrow("email")}
            </th>

            <th onClick={() => onSort("department")}>
              Department{renderArrow("department")}
            </th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {users.length === 0 ? (
            <tr>
              <td colSpan="6" align="center">
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}

        </tbody>

      </table>
    </div>
  );
}

export default UserTable;