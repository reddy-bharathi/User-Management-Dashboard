import { useEffect, useState } from "react";
import { validateUser } from "../utils/validation";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  department: ""
};

function UserForm({ onAdd, onUpdate, editingUser, clearEditing }) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData(initialState);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      validationErrors.email = "Invalid email address";
    }

    if (!formData.department.trim()) {
      validationErrors.department = "Department is required";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (editingUser) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }

    setFormData(initialState);
    setErrors({});
  };

  const handleCancel = () => {
    setFormData(initialState);
    setErrors({});
    clearEditing();
  };

  return (
    <div className="form-container">
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>First Name</label>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          {errors.firstName && (
            <small className="error">{errors.firstName}</small>
          )}
        </div>

        <div className="form-group">
          <label>Last Name</label>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          {errors.lastName && (
            <small className="error">{errors.lastName}</small>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <small className="error">{errors.email}</small>
          )}
        </div>

        <div className="form-group">
          <label>Department</label>

          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />

          {errors.department && (
            <small className="error">{errors.department}</small>
          )}
        </div>

        <div className="button-group">
          <button type="submit">
            {editingUser ? "Update User" : "Add User"}
          </button>

          {editingUser && (
            <button
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>

      </form>
    </div>
  );
}

export default UserForm;