import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ManiRote from './layout/ManiRote';
import Coffee from './Pages/Coffee';
import AddCart from './Pages/AddCart';
import CoffeeUptade from './Pages/CoffeeUptade';
import SingUP from './Pages/SingUP';
import Login from './Pages/Login';
import AuthProvider from './AutProvider/AuthProvider';
import Users from './Compment/Users';
const router = createBrowserRouter([
  {
    path: '/',
    element: <ManiRote></ManiRote>,
    children: [
      {
        path: '/',
        element: <Coffee></Coffee>,
        loader: () => fetch('http://localhost:5000/coffees'),
      },
      {
        path: '/addCart',
        element: <AddCart></AddCart>,
      },
      {
        path: '/updates/:id',
        element: <CoffeeUptade></CoffeeUptade>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: '/singUp',
        element: <SingUP></SingUP>,
      },
      {
        path: '/Login',
        element: <Login></Login>,
      },
      {
        path: '/user',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/users'),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      {' '}
      <RouterProvider router={router} />{' '}
    </AuthProvider>
  </React.StrictMode>
);
