import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Mechanics from './pages/Mechanics';
import Users from './pages/Users';
import Reviews from './pages/Reviews';
import Publishers from './pages/Publishers';
import Versions from './pages/Versions';
import Nav from './components/Nav';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/mechanics",
        element: <Mechanics />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/publishers",
        element: <Publishers />,
      },
      {
        path: "/versions",
        element: <Versions />,
      },
    ],
  },
]);

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet /> {/* Renderuje zagnieżdżone trasy */}
    </div>
  );
}

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
