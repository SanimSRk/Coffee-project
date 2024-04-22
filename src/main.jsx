import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ManiRote from './layout/ManiRote';
import Coffee from './Pages/Coffee';
import AddCart from './Pages/AddCart';
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
