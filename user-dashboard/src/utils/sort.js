export const sortUsers = (
  users,
  sortField,
  sortDirection = "asc"
) => {
  if (!sortField) return users;

  const sortedUsers = [...users];

  sortedUsers.sort((a, b) => {
    const valueA = String(a[sortField]).toLowerCase();
    const valueB = String(b[sortField]).toLowerCase();

    if (valueA < valueB) {
      return sortDirection === "asc" ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortDirection === "asc" ? 1 : -1;
    }

    return 0;
  });

  return sortedUsers;
};