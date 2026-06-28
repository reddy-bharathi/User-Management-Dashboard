import { useState, useEffect } from "react";
import "./../styles/modal.css";

function FilterModal({
  isOpen,
  onClose,
  filters,
  setFilters
}) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLocalFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const applyFilters = () => {
    setFilters(localFilters);
    onClose();
  };

  const clearFilters = () => {
    const empty = {
      firstName: "",
      lastName: "",
      email: "",
      department: ""
    };

    setLocalFilters(empty);
    setFilters(empty);
    onClose();
  };

  return (
    <div className="modal-overlay">

      <div className="filter-modal">
        <b>
        <h2>Filter Users</h2></b>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={localFilters.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={localFilters.lastName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={localFilters.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={localFilters.department}
          onChange={handleChange}
        />

        <div className="modal-buttons">
          <button onClick={applyFilters}>
            Apply
          </button>

          <button onClick={clearFilters}>
            Clear
          </button>

          <button onClick={onClose}>
            Close
          </button>
        </div>

      </div>

    </div>
  );
}

export default FilterModal;