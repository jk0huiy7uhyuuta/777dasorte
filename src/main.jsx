import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './router/Login';
import Carre from './router/Carre';
import './index.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/carre',
    element: <Carre />,
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
  </React.StrictMode>
);

