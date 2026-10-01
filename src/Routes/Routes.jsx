import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Ascent from '../ascent/Ascent.jsx';
import Home from '../Pages/Home/Home.jsx';

// "/" is The Ascent; the previous particle-driven portfolio lives on at /particles
const router = createBrowserRouter([
  { path: '/', element: <Ascent /> },
  { path: '/particles', element: <Home /> },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
