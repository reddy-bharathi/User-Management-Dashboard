# User Management Dashboard

## Overview

The User Management Dashboard is a responsive React-based web application developed to manage user information efficiently. The application allows users to perform complete CRUD (Create, Read, Update, Delete) operations while interacting with the JSONPlaceholder REST API. Since JSONPlaceholder is a mock API, Local Storage is used to persist user data across page refreshes.

The application provides a modern and responsive user interface with features like search, filtering, sorting, pagination, client-side validation, and unique email verification.

---

## Features

* View all users in a responsive table
* Add a new user
* Edit existing user details
* Delete users with confirmation popup
* Search users by First Name, Last Name, Email, or Department
* Filter users using multiple fields
* Sort users by First Name, Last Name, Email, and Department
* Pagination with page size options:

  * 10
  * 25
  * 50
  * 100
* Client-side form validation
* Unique email validation
* Responsive design for Desktop, Tablet, and Mobile
* Modern dashboard UI with gradients and animations
* Local Storage integration for persistent data
* JSONPlaceholder API integration
* Error handling and loading states

---

## Technologies Used

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3

### Libraries

* Axios
* React Hooks

### API

* JSONPlaceholder REST API

---

## Project Structure

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
│   ├── FilterPopup.jsx
│   ├── UserTable.jsx
│   ├── UserRow.jsx
│   ├── UserForm.jsx
│   ├── Pagination.jsx
│   └── ConfirmDelete.jsx
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
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/user-management-dashboard.git
```

Move into the project directory

```bash
cd user-management-dashboard
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

## API Endpoint

```
https://jsonplaceholder.typicode.com/users
```

---

## Implemented Functionalities

### User Management

* Display all users
* Add new user
* Edit user details
* Delete user

### Search

Search is performed in real time using:

* First Name
* Last Name
* Email
* Department

### Filter

Users can be filtered using:

* First Name
* Last Name
* Email
* Department

### Sorting

Sorting is available for:

* First Name
* Last Name
* Email
* Department

Both Ascending and Descending order are supported.

### Pagination

Available page sizes:

* 10
* 25
* 50
* 100

### Form Validation

The application validates:

* First Name
* Last Name
* Email format
* Department
* Unique Email

### Local Storage

User data is stored in Local Storage.

Whenever a user is:

* Added
* Updated
* Deleted

the Local Storage is updated automatically.

On application startup, data is loaded from Local Storage if available.

---

## Assumptions

Since JSONPlaceholder does not provide separate fields for First Name, Last Name, and Department, the following assumptions were made:

* The full name is split into First Name and Last Name.
* Departments are assigned from predefined values:

  * IT
  * HR
  * Finance
  * Sales
  * Marketing
* Local Storage is used to persist data because JSONPlaceholder does not permanently save changes.

---

## Error Handling

The application handles:

* API request failures
* Empty form fields
* Invalid email addresses
* Duplicate email addresses
* Invalid department selection

---

## Responsive Design

The application is fully responsive and supports:

* Desktop
* Laptop
* Tablet
* Mobile

Features include:

* Responsive tables
* Flexible layouts
* Mobile-friendly forms
* Adaptive pagination
* Responsive filter popup

---

## UI Highlights

* Modern Gradient Dashboard
* Glassmorphism-inspired cards
* Animated buttons
* Hover effects
* Smooth transitions
* Responsive layout
* Confirmation dialog
* Gradient badges
* Modern forms
* Attractive pagination

---

## Challenges Faced

* JSONPlaceholder is a mock API and does not permanently store data.
* Maintaining user changes after page refresh.
* Implementing client-side unique email validation.
* Managing search, sorting, filtering, and pagination together while maintaining application state.
* Creating a fully responsive table for smaller screens.

---

## Solution

To overcome the API limitation:

* Local Storage was implemented to store all user modifications.
* CRUD operations update both the application state and Local Storage.
* The dashboard first checks Local Storage before fetching data from the API.

---

## Future Enhancements

* Authentication and Authorization
* Role-Based Access Control
* Dark Mode
* Export Users to Excel/PDF
* Import Users using CSV
* Server-side Pagination
* Server-side Search
* User Profile Images
* Dashboard Statistics
* Toast Notifications
* Unit Testing
* API Integration with a real backend

---

## Git Commands

Initialize repository

```bash
git init
```

Add files

```bash
git add .
```

Commit changes

```bash
git commit -m "Initial Commit"
```

Create main branch

```bash
git branch -M main
```

Add remote repository

```bash
git remote add origin https://github.com/your-username/user-management-dashboard.git
```

Push to GitHub

```bash
git push -u origin main
```

---

## Deployment

Build the application

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

The project can be deployed on:

* Vercel
* Netlify
* GitHub Pages
* Render

---

## Author

**Boosi Naresh**

B.Tech - Computer Science Engineering (AI & ML)

Malla Reddy College of Engineering

Email: [bushinaresh68@gmail.com](mailto:bushinaresh68@gmail.com)

Location: Khammam, Telangana

---

## Thank You

Thank you for reviewing this project. This User Management Dashboard demonstrates React fundamentals, REST API integration, CRUD operations, responsive UI development, client-side validation, Local Storage management, and modern frontend development practices.
