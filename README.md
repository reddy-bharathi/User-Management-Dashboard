# User Management Dashboard

## Overview

The User Management Dashboard is a responsive React-based web application developed to manage user information efficiently. The application allows users to perform complete CRUD (Create, Read, Update, Delete) operations while interacting with the JSONPlaceholder REST API. Since JSONPlaceholder is a mock API, Local Storage is used to persist user data across page refreshes.

The application provides a modern and responsive user interface with features like search, filtering, sorting, pagination, client-side validation.

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
## FrontEnd
- ReactJs
- JavaScript (ES6+)
- HTML5
- CSS3
## Libraries 
- Axios
- React Hooks
- React Icons

## Installation

Clone the Repository
```bash
https://github.com/reddy-bharathi/User-Management-Dashboard

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

## Implemented Functionalities

## User Management
- Display all users
- Add new user
- Edit user details
- Delete user

## Search
Search is performed in real time using:
- First Name
- Last Name
- Email
- Department

## Filter
Users can be filtered using:
- First Name
- Last Name
- Email
- Department

## Sorting
 Sorting is available for:
- First Name
- Last Name
- Email
- Department


## Pagination
Available page sizes:

- 10
- 25
- 50
- 100
## Form Validation
The application validates:

- First Name
- Last Name
- Email format
- Department
- Unique Email
