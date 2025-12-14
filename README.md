# React Advanced Concepts – Application Dashboard

## Project Overview

This project is developed as part of the **Full Stack Development – Week 7 Assignment**. The objective of this assignment is to demonstrate advanced React concepts such as **global state management using Redux Toolkit**, **API state management using TanStack React Query**, **professional UI development using Material UI (MUI)**, and **performance optimization techniques** like memoization and lazy loading.

The application is a **React-based Application Dashboard** that follows a scalable and professional structure commonly used in real-world projects.

---

## Assignment Objectives Covered

- Advanced global state management using **Redux Toolkit**
- Efficient API handling using **React Query**
- Professional dashboard UI using **Material UI (MUI)**
- Performance optimization using **React.memo, useMemo, useCallback, and lazy loading**

---

## Features Implemented

### Task 1: Redux Toolkit – Global State Management

- Redux Toolkit configured in the React project
- Redux Store created and provided globally
- Counter feature implemented as global state
- Redux actions supported:

  - Increment (Add data)
  - Decrement (Update data)
  - Reset (Delete data)
- Redux hooks used:

  - `useSelector` to access state
  - `useDispatch` to dispatch actions

---

### Task 2: React Query – API State Management

- TanStack React Query installed and configured
- Public API used: `https://jsonplaceholder.typicode.com/users`
- Features implemented using React Query:

  - `useQuery` for fetching user data
  - Loading state handling
  - Error state handling
  - Displaying fetched data in table format
  - Search/filter functionality on fetched data
  - `useMutation` for adding a new user (POST request)
  - Automatic refetching of data after mutation
- **React Query DevTools** enabled for monitoring queries and mutations

---

### Task 3: UI Development using Material UI (MUI)

- Material UI (MUI) installed and used for UI components
- Professional dashboard layout implemented using:

  - AppBar (Navbar)
  - Drawer (Sidebar)
  - Grid / Box for layout
- UI components used:

  - Card (Counter summary)
  - Table (Users list)
  - Pagination component
- Form elements implemented:

  - TextField (Search user)
  - Button (Add user, Counter actions)

---

### Task 4: Performance Optimization

- `React.memo` used to prevent unnecessary re-renders of child components (UserRow, CounterCard)
- `useMemo` used for:

  - Filtering user list
  - Pagination logic
- `useCallback` applied where function references are passed to child components
- Lazy loading and code splitting implemented using:

  - `React.lazy`
  - `Suspense`
- Pages lazy-loaded:

  - Users Page
  - Settings Page

---

## Optional Bonus Tasks Implemented

- Redux Toolkit and React Query used together in the same application
- Pagination added for table data
- Dark / Light theme toggle implemented using MUI theming
- React Query DevTools integrated
- Large list optimization (200+ users) using memoization

---

## Screenshots Included

The following screenshots are included for submission:

- Dashboard Page (Redux Counter)
- Redux State Update (Increment / Reset)
- Users Page (React Query – useQuery)
- Search and Filter Functionality
- Add User Mutation (useMutation) with DevTools
- Pagination and Large List Handling
- Dark / Light Theme Toggle
- Lazy Loaded Settings Page

> **Note:** React Query DevTools (Queries / Mutations / Filter tab) is visible in all screenshots.

---

## Project Folder Structure

```
src/
│
├── app/
│   └── store.js                # Redux store configuration
│
├── features/
│   └── counterSlice.js         # Redux slice for Counter
│
├── components/
│   ├── Navbar.js               # AppBar (Navbar)
│   ├── Sidebar.js              # Drawer (Sidebar)
│   ├── CounterCard.js          # Counter UI (Redux)
│   └── UserRow.js              # Memoized table row
│
├── pages/
│   ├── Dashboard.js            # Dashboard page
│   ├── Users.js                # Users page (React Query)
│   └── Settings.js             # Lazy loaded Settings page
│
├── theme.js                    # Light/Dark theme configuration
├── App.js                      # Routing and layout
├── index.js                    # Entry point
├── index.css                   # Global styles
└── package.json                # Project dependencies
```

---

## Technologies Used

- **React.js**
- **Redux Toolkit**
- **TanStack React Query**
- **Material UI (MUI)**
- **React Router DOM**
- **JavaScript (ES6+)**

---

## How to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to project folder:

   ```bash
   cd react_advanced_dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open browser:

   ```
   http://localhost:3000
   ```

---

## Conclusion

This project successfully demonstrates advanced React concepts including Redux Toolkit, React Query, Material UI, and performance optimization techniques. The application follows a clean and scalable architecture and adheres to all assignment requirements.


