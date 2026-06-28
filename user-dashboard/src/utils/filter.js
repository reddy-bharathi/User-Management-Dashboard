export const filterUsers = (users, searchTerm = "", filters = {}) => {
  const search = searchTerm.toLowerCase().trim();

  return users.filter((user) => {
    const matchesSearch =
      user.firstName.toLowerCase().includes(search) ||
      user.lastName.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.department.toLowerCase().includes(search);

    const matchesFirstName =
      !filters.firstName ||
      user.firstName
        .toLowerCase()
        .includes(filters.firstName.toLowerCase());

    const matchesLastName =
      !filters.lastName ||
      user.lastName
        .toLowerCase()
        .includes(filters.lastName.toLowerCase());

    const matchesEmail =
      !filters.email ||
      user.email
        .toLowerCase()
        .includes(filters.email.toLowerCase());

    const matchesDepartment =
      !filters.department ||
      user.department
        .toLowerCase()
        .includes(filters.department.toLowerCase());

    return (
      matchesSearch &&
      matchesFirstName &&
      matchesLastName &&
      matchesEmail &&
      matchesDepartment
    );
  });
};