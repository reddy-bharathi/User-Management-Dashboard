# User Management Dashboard

## Overview

A React-based User Management Dashboard that performs CRUD operations using the JSONPlaceholder REST API.

## Features

- View users
- Add user
- Edit user
- Delete user
- Search users
- Sort by all columns
- Filter by:
  - First Name
  - Last Name
  - Email
  - Department
- Pagination (10, 25, 50, 100)
- Responsive UI
- Client-side validation
- Error handling
- Loading indicator
- Toast notifications

## Technologies

- React
- Vite
- Axios
- React Toastify
- React Icons

## Installation

```bash
npm install
```

Run the project

```bash
npm run dev
```

Build

```bash
npm run build
```

Run tests

```bash
npm test
```

## API

https://jsonplaceholder.typicode.com/users

## Folder Structure

```
user-management-dashboard
│
├── public
│
├── src
│
├── api
│   └── userService.js
│
├── components
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── FilterModal.jsx
│   ├── UserTable.jsx
│   ├── UserRow.jsx
│   ├── UserForm.jsx
│   ├── Pagination.jsx
│   
│
├── styles
│   └── app.css
    
│
├── utils
│   └── validators.js
│
├── App.jsx
├── main.jsx
│
└── README.md
